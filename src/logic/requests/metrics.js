import API from 'logic/api';

/**
 * Get Metrics
 */
export async function getMetrics() {
  return await API().get('/mock-data.js');
}
