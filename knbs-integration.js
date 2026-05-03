// ── KNBS (Kenya National Bureau of Statistics) INTEGRATION ──
class KNBSClient {
  constructor() {
    this.baseUrl = 'https://data.knbs.or.ke/api';
    this.portalUrl = 'https://data.knbs.or.ke';
    this.apiKey = null;
    this.isAuthenticated = false;
  }

  initialize(apiKey = null) {
    this.apiKey = apiKey;
    // KNBS uses API key authentication
    if (apiKey) {
      this.isAuthenticated = true;
    }
  }

  async getPopulationData(county = 'Nairobi', year = 2022) {
    try {
      // Population statistics
      const endpoint = `${this.baseUrl}/population?county=${encodeURIComponent(county)}&year=${year}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching population data:', error);
      throw error;
    }
  }

  async getEconomicData(indicator = 'GDP', county = 'Nairobi') {
    try {
      const endpoint = `${this.baseUrl}/economics?indicator=${encodeURIComponent(indicator)}&county=${encodeURIComponent(county)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching economic data:', error);
      throw error;
    }
  }

  async getInfrastructureData(type = 'roads', county = 'Nairobi') {
    try {
      const endpoint = `${this.baseUrl}/infrastructure?type=${encodeURIComponent(type)}&county=${encodeURIComponent(county)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching infrastructure data:', error);
      throw error;
    }
  }

  async getHealthData(facilityType = 'all', county = 'Nairobi') {
    try {
      const endpoint = `${this.baseUrl}/health?facility_type=${encodeURIComponent(facilityType)}&county=${encodeURIComponent(county)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching health data:', error);
      throw error;
    }
  }

  async getEducationData(level = 'all', county = 'Nairobi') {
    try {
      const endpoint = `${this.baseUrl}/education?level=${encodeURIComponent(level)}&county=${encodeURIComponent(county)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching education data:', error);
      throw error;
    }
  }

  async getHousingData(county = 'Nairobi') {
    try {
      const endpoint = `${this.baseUrl}/housing?county=${encodeURIComponent(county)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching housing data:', error);
      throw error;
    }
  }

  async getEnvironmentalData(indicator = 'air_quality', county = 'Nairobi') {
    try {
      const endpoint = `${this.baseUrl}/environment?indicator=${encodeURIComponent(indicator)}&county=${encodeURIComponent(county)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching environmental data:', error);
      throw error;
    }
  }

  async searchDatasets(query) {
    try {
      const endpoint = `${this.baseUrl}/datasets/search?q=${encodeURIComponent(query)}`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error searching datasets:', error);
      throw error;
    }
  }

  async getDatasetMetadata(datasetId) {
    try {
      const endpoint = `${this.baseUrl}/datasets/${datasetId}/metadata`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching dataset metadata:', error);
      throw error;
    }
  }

  async makeRequest(endpoint) {
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mazingira-Intelligence-Platform/1.0'
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
      headers['X-API-Key'] = this.apiKey;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: headers
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('KNBS API request failed:', error);
      throw error;
    }
  }

  // Alternative: Web scraping for data without API
  async scrapeKNBSData(category, county = 'Nairobi') {
    try {
      // This is a fallback method if API is not available
      const searchUrl = `${this.portalUrl}/dataset?q=${encodeURIComponent(category)}&responsible_party=Kenya+National+Bureau+of+Statistics`;
      
      // Note: Web scraping requires server-side implementation due to CORS
      // This would need to be implemented as a serverless function
      console.log('Web scraping fallback for KNBS data:', searchUrl);
      
      return {
        message: 'Web scraping requires server-side implementation',
        url: searchUrl,
        category: category,
        county: county
      };
    } catch (error) {
      console.error('Error scraping KNBS data:', error);
      throw error;
    }
  }
}

// ── KENYA OPEN DATA INITIATIVE ──
class KenyaOpenDataClient {
  constructor() {
    this.baseUrl = 'https://opendata.go.ke/api';
    this.portalUrl = 'https://opendata.go.ke';
    this.apiKey = null;
  }

  initialize(apiKey = null) {
    this.apiKey = apiKey;
  }

  async getNairobiData(category = 'all') {
    try {
      const endpoint = `${this.baseUrl}/datasets?category=${encodeURIComponent(category)}&county=nairobi`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching Nairobi open data:', error);
      throw error;
    }
  }

  async getTransportData() {
    try {
      const endpoint = `${this.baseUrl}/transport/nairobi`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching transport data:', error);
      throw error;
    }
  }

  async getLandData() {
    try {
      const endpoint = `${this.baseUrl}/land/nairobi`;
      const response = await this.makeRequest(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching land data:', error);
      throw error;
    }
  }

  async makeRequest(endpoint) {
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mazingira-Intelligence-Platform/1.0'
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: headers
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Kenya Open Data API request failed:', error);
      throw error;
    }
  }
}

// ── NAIROBI CITY COUNTY DATA SOURCES ──
class NairobiDataClient {
  constructor() {
    this.baseUrl = 'https://nairobi.go.ke/api';
    this.portalUrl = 'https://nairobi.go.ke';
  }

  async getServiceData(serviceType = 'all') {
    try {
      const endpoint = `${this.baseUrl}/services?type=${encodeURIComponent(serviceType)}`;
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching Nairobi service data:', error);
      throw error;
    }
  }

  async getDevelopmentProjects() {
    try {
      const endpoint = `${this.baseUrl}/projects`;
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching development projects:', error);
      throw error;
    }
  }

  async getHealthFacilities() {
    try {
      const endpoint = `${this.baseUrl}/health/facilities`;
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching health facilities:', error);
      throw error;
    }
  }

  async getEducationalInstitutions() {
    try {
      const endpoint = `${this.baseUrl}/education/institutions`;
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching educational institutions:', error);
      throw error;
    }
  }
}

// ── WORLD BANK KENYA DATA ──
class WorldBankKenyaClient {
  constructor() {
    this.baseUrl = 'https://api.worldbank.org/v2';
    this.countryCode = 'KEN';
  }

  async getPopulationData() {
    try {
      const endpoint = `${this.baseUrl}/country/${this.countryCode}/indicator/SP.POP.TOTL?format=json`;
      const response = await fetch(endpoint);
      const data = await response.json();
      return data[1]; // World Bank API returns metadata + data
    } catch (error) {
      console.error('Error fetching World Bank population data:', error);
      throw error;
    }
  }

  async getGDPData() {
    try {
      const endpoint = `${this.baseUrl}/country/${this.countryCode}/indicator/NY.GDP.MKTP.CD?format=json`;
      const response = await fetch(endpoint);
      const data = await response.json();
      return data[1];
    } catch (error) {
      console.error('Error fetching World Bank GDP data:', error);
      throw error;
    }
  }

  async getUrbanPopulationData() {
    try {
      const endpoint = `${this.baseUrl}/country/${this.countryCode}/indicator/SP.URB.TOTL.IN.ZS?format=json`;
      const response = await fetch(endpoint);
      const data = await response.json();
      return data[1];
    } catch (error) {
      console.error('Error fetching World Bank urban population data:', error);
      throw error;
    }
  }

  async getInfrastructureData(indicator) {
    try {
      const endpoint = `${this.baseUrl}/country/${this.countryCode}/indicator/${indicator}?format=json`;
      const response = await fetch(endpoint);
      const data = await response.json();
      return data[1];
    } catch (error) {
      console.error('Error fetching World Bank infrastructure data:', error);
      throw error;
    }
  }
}

// ── DATA AGGREGATOR ──
class KenyaDataAggregator {
  constructor() {
    this.knbsClient = new KNBSClient();
    this.openDataClient = new KenyaOpenDataClient();
    this.nairobiClient = new NairobiDataClient();
    this.worldBankClient = new WorldBankKenyaClient();
  }

  async getAllNairobiData() {
    try {
      const data = {
        population: await this.worldBankClient.getPopulationData(),
        gdp: await this.worldBankClient.getGDPData(),
        urbanPopulation: await this.worldBankClient.getUrbanPopulationData(),
        services: await this.nairobiClient.getServiceData(),
        projects: await this.nairobiClient.getDevelopmentProjects(),
        healthFacilities: await this.nairobiClient.getHealthFacilities(),
        education: await this.nairobiClient.getEducationalInstitutions()
      };

      return data;
    } catch (error) {
      console.error('Error aggregating Nairobi data:', error);
      throw error;
    }
  }

  async getComprehensiveIntelligenceData() {
    try {
      const data = await this.getAllNairobiData();
      
      // Transform data for intelligence engine
      const transformedData = this.transformForIntelligence(data);
      
      return transformedData;
    } catch (error) {
      console.error('Error getting comprehensive intelligence data:', error);
      throw error;
    }
  }

  transformForIntelligence(rawData) {
    return {
      headers: ['indicator', 'value', 'year', 'source', 'category'],
      rows: this.flattenData(rawData),
      metadata: {
        sources: ['KNBS', 'World Bank', 'Nairobi City County', 'Kenya Open Data'],
        lastUpdated: new Date().toISOString(),
        reliability: 'high'
      }
    };
  }

  flattenData(data) {
    const rows = [];
    
    Object.keys(data).forEach(category => {
      if (Array.isArray(data[category])) {
        data[category].forEach(item => {
          rows.push({
            indicator: item.indicator || category,
            value: item.value || item.count || 0,
            year: item.year || new Date().getFullYear(),
            source: item.source || 'Unknown',
            category: category
          });
        });
      } else if (typeof data[category] === 'object') {
        Object.keys(data[category]).forEach(key => {
          rows.push({
            indicator: key,
            value: data[category][key],
            year: new Date().getFullYear(),
            source: 'Aggregated',
            category: category
          });
        });
      }
    });

    return rows;
  }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    KNBSClient,
    KenyaOpenDataClient,
    NairobiDataClient,
    WorldBankKenyaClient,
    KenyaDataAggregator
  };
}
