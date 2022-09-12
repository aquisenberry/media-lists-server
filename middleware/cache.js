import axios from 'axios'

/**
 * Complete cache layer and helper functions for ajax calls
 * @param {integer} ttl - time to live for any given cache object
 * @param {integer} timeout - timeout before canceling connection
 * @returns - constructor
 */
const SuperCache = function ( timeout = 7, prune = 86400) {
  // Ensure timeout is an integer and in milliseconds
  const queryTimeout = parseInt(timeout) * 1000
  const pruneInterval = parseInt(prune) * 1000

  /*
    Cache store object schema:
    {
      resource: string,
      lastUpdate: integer,
      inFlight: boolean,
      hits: integer,
      status: integer,
      data: mixed
    }
  */
  const contents = []
  let timeouts = []

  // Expose public methods
  return {
    getItem,
    getAllContents,
    getAllTimeouts,
    purge
  }

  /**
   * Gets an individual item from the cache and updates if it's stale
   * @param {string} url
   * @returns
   */
  async function getItem(url, axiosOptions, ttl, preventUpdate = false) {
      // Ensure ttl is an integer and in milliseconds
    const cacheExpiration = parseInt(ttl) * 1000
    const needle = contents.find((n) => n.resource === url)
    if (needle) {
      // Increment hit counter
      needle.hits++

      // If cache is stale and not currently in flight, trigger refresh
      if (
        Date.now() - needle.lastUpdate >= cacheExpiration &&
        needle.inFlight === false &&
        preventUpdate === false
      ) {
        needle.inFlight = true
        const data = await proxy(url, axiosOptions)
        setItem(url, data.data, data.status)
      }

      // Return cached data
      return {
        data: needle.data,
        status: needle.status
      }
    } else {
      const data = await proxy(url, axiosOptions)
      setItem(url, data.data, data.status)

      // Return fresh data
      return {
        data: data.data,
        status: data.status
      }
    }
  }

  /**
   * Get all contents of the cache
   * @returns array containing all contents
   */
  function getAllContents(includeData = false) {
    if (includeData) {
      return contents
    } else {
      return contents.map(({ data, ...n }) => n)
    }
  }

  /**
   * Get all contents of the timeouts
   * @returns array containing all timeoutes
   */
  function getAllTimeouts() {
    return timeouts
  }

  /**
   * Removes an item from the cache
   * @param {string, boolean} url - pass in a url to remove the resource or true to remove them all
   */
  function purge(url) {
    if (typeof url === 'string') {
      const needle = contents.findIndex((n) => n.resource === url)
      contents.splice(needle, 1)
      return true
    } else if (typeof url === 'boolean' && url === true) {
      contents.length = 0
      return true
    }
  }

  /**
   * Upserts a new item in the cache
   * @param {string} url
   * @param {mixed} data
   * @param {integer} status
   */
  function setItem(url, data, status) {
    const needle = contents.findIndex((n) => n.resource === url)
    const newData = {
      resource: url,
      lastUpdate: Date.now(),
      inFlight: false,
      hits: 1,
      status,
      data
    }

    if (status < 500) {
      if (needle > -1) {
        contents[needle] = newData
      } else {
        contents.push(newData)
      }
    } else if (status >= 500) {
      // If we've hit a 5xx, update cache timestamp if it exists but don't touch the data
      if (needle > -1) {
        contents[needle].lastUpdate = Date.now()
        contents[needle].inFlight = false
      }

      // Track timeouts
      if (status === 599) {
        timeouts.push({
          resource: url,
          timestamp: Date.now()
        })
        timeouts = timeouts.slice(-50)
      }
    }

    // Prune cache to remove stale items
    pruneCache()
  }

  /**
   * Helper function for normalizing fetch requests
   * @param {string} url
   * @returns promise
   */
  async function proxy(url, options = {}) {
    let output = null
    options.timeout = queryTimeout
    try {
      output = await axios.get(url, options)
    } catch (e) {
      // Check for timeouts
      if (e.message.includes('timeout')) {
        output = {
          status: 599,
          data: 'Network Connect Timeout Error'
        }
      } else {
        output = {
          status: e?.response?.status || 500,
          data: e?.response?.data || 'Internal Server Error'
        }
      }
    }
    return { status: output.status, data: output.data }
  }

  /**
   * Prune stale cache
   */
  function pruneCache() {
    const now = Date.now()
    const stale = contents.filter(
      (n) => now - n.lastUpdate >= pruneInterval && n.inFlight === false
    )
    stale.forEach((n) => {
      purge(n.resource)
    })
  }
}

export default SuperCache
