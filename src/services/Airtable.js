// src/services/Airtable.js

const baseUrl = 'https://airtable.com/v0/appi09iP9sn2pprfV/tblJrzVEFMFuVvTpE';

// Use the Bearer token for authentication (fetching it from environment variable)
const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    'Content-Type': 'application/json'
};

// Generic function to fetch records from a specific table
const fetchRecords = async (tableName) => {
    try {
        const response = await fetch(`${baseUrl}/${tableName}`, { headers });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.records;
    } catch (error) {
        console.error(`Error fetching data from table ${tableName}:`, error);
        return [];
    }
};

// Function to get data for Navbar or Header links
export const getHeaders = async () => {
    const records = await fetchRecords('Headers');
    return records.map(record => ({
        page: record.fields.Page,
        link: record.fields.Link
    }));
};

// Function to get Meetings information
export const getMeetings = async () => {
    const records = await fetchRecords('Meetings');
    return records.map(record => ({
        date: record.fields.Date,   // Assuming there's a "Date" field in Meetings
        time: record.fields.Time,   // Assuming there's a "Time" field in Meetings
        agenda: record.fields.Agenda   // Assuming there's an "Agenda" field in Meetings
    }));
};

// Function to get Members information
export const getMembers = async () => {
    const records = await fetchRecords('Members');
    return records.map(record => ({
        name: record.fields.Name,
        position: record.fields.Position,
        profilePicture: record.fields['Profile Picture']?.[0]?.url,  // Access the profile picture
    }));
};

// Function to get About Us information
export const getAboutUs = async () => {
    const records = await fetchRecords('AboutUs');
    return records.map(record => ({
        tabName: record.fields.TabName,   // Assuming there's a "TabName" field
        content: record.fields.Content,   // Assuming there's a "Content" field
    }));
};

// Function to get Past Cars information
export const getPastCars = async () => {
    const records = await fetchRecords('PastCars');
    return records.map(record => ({
        carName: record.fields.CarName,   // Assuming there's a "CarName" field
        year: record.fields.Year,
        description: record.fields.Description,
        imageUrl: record.fields.Image?.[0]?.url,  // Access the image of the car
    }));
};

// Function to get Sponsors information
export const getSponsors = async () => {
    const records = await fetchRecords('Sponsors');
    return records.map(record => ({
        name: record.fields.Name,
        logoUrl: record.fields.Logo?.[0]?.url,    // Access sponsor logo
        website: record.fields.Website,
    }));
};

// Function to fetch specific page content based on a filter formula
export const getPageContent = async (page) => {
    try {
        const url = `${baseUrl}/Pages?filterByFormula={Page}="${page}"`;
        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.records.length ? data.records[0].fields : null;
    } catch (error) {
        console.error("Error fetching page content:", error);
        return null;
    }
};
