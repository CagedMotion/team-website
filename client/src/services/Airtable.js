// Generic function to fetch records from a specific table
// src/services/Airtable.js

// Point to your proxy server running on localhost:5000
const baseUrl = 'http://localhost:5000/api';  // Proxy server URL

// Function to fetch data via proxy server (no headers needed)
const fetchRecords = async (endpoint) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data.records;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      return [];
    }
  };
  
  // Function to fetch headers including Logo, Image Title, Info, etc.
  export const getHeaders = async () => {
    const records = await fetchRecords('Headers');
    return records.map(record => ({
      id: record.id,
      page: record.fields['fldmVY0nJ8uemBI6F'] || 'No page data',  // Page Field
      logo: record.fields['flddXZCUheoWC4n60'] 
        ? extractImageInfo(record.fields['flddXZCUheoWC4n60'])
        : null,  // Logo Field
      imageTitle: record.fields['fldMWd3kaaUa2ZPP8'] || 'No image title',  // Image Title Field
      infoTitle: record.fields['fldfR5LEQ4Bd50JnC'] || 'No info title',  // Info Title Field
      info: record.fields['flddM7U8Fo87xCGkX'] || 'No info',  // Info Field
    }));
  };

  // Function to fetch members data
export const getMembers = async () => {
  const records = await fetchRecords('Members');
  return records.map(record => ({
    id: record.id,
    name: record.fields['fld8sdtuWymIehzP6'] || 'No name data',
    current: record.fields['fld63wzQUCaR7OIck'] || false,
    position: record.fields['fldpbnF9eH26uOPCl'] || 'No position data',
    picture: record.fields['fld8MzGodJnxoRyYl'] 
      ? extractImageInfo(record.fields['fld8MzGodJnxoRyYl'])
      : null,  // Picture field
    linkedIn: record.fields['fld8ZHjC0vCHNEpwx'] || '',
    funnyPic: record.fields['fld7Nd1u7Ny5emm55']
      ? extractImageInfo(record.fields['fld7Nd1u7Ny5emm55'])
      : null,
    instagram: record.fields['fldaEokNRmkKIJgRo'] || '',
    github: record.fields['fldcrIu0fRAXGBUeM'] || '',
    twitter: record.fields['fldjY29K6nQpRxFYz'] || '',
    facebook: record.fields['fldZwS9haqKGDdmeo'] || '',
  }));
};
  
// Function to fetch About Us data
export const getAboutUs = async () => {
  const records = await fetchRecords('AboutUs');
  return records.map(record => ({
    id: record.id,
    tab: record.fields['fldDPWsyT2KJZKB56'] || 'No tab data',  // Tab field
    title: record.fields['fld6ukSqoy1TZPdXj'] || 'No title data',  // Title field
    info: record.fields['fld78xzklbglE4BPR'] || 'No info data',  // Info field (long text)
  }));
};

// Function to fetch past cars data
export const getPastCars = async () => {
  const records = await fetchRecords('PastCars');
  return records.map(record => ({
    id: record.id,
    car: record.fields['fldpbv02xmYlxw9XQ'] || 'No car data',  // Car field
    description: record.fields['fldySGZcFcToQYINc'] || 'No description available',  // Description field
    icon: record.fields['fldIrVuLpL4CwCJXo'] 
      ? extractImageInfo(record.fields['fldIrVuLpL4CwCJXo']) 
      : null,  // Icon field
    picture: record.fields['fldAn5H4IKi6eFgr7'] 
      ? extractImageInfo(record.fields['fldAn5H4IKi6eFgr7']) 
      : null,  // Picture field
    battery: record.fields['fldA9Hp7j9A37aYO8'] || 'No battery info',
    motors: record.fields['fldLWysfC7nbTMp5Z'] || 'No motor info',
    arrayArea: record.fields['fldiUlaPpJPQ63mRE'] || 'No array area info',
    arrayOutput: record.fields['fld0kQpQ8FPwAqExU'] || 'No array output info',
    solarCells: record.fields['fldkLY0FAvkjwAp4T'] || 'No solar cells info',
    batteryWeight: record.fields['fldCpOgRMRrVGpehC'] || 'No battery weight info',
    topSpeed: record.fields['fldvaCUk14dG9hQk9'] || 'No top speed info',
    motorPeak: record.fields['fldhtuNRWldOPm9TS'] || 'No motor peak power info',
    bodyFrame: record.fields['fldMzDGDegLH29wfq'] || 'No body frame info',
    suspension: record.fields['fldG1AskcGeZh79OX'] || 'No suspension info',
    layout: record.fields['fldQNfqLsdTtSnlZB'] || 'No layout info',
    rims: record.fields['fldxeuWhZT56h59qM'] || 'No rims info',
    tires: record.fields['fldhcQZVnXMDgKDPa'] || 'No tires info',
    weight: record.fields['fldqkpbMNQ6jTZAHH'] || 'No weight info',
  }));
};

// Function to fetch sponsors data
export const getSponsors = async () => {
  const records = await fetchRecords('Sponsors');
  return records.map(record => ({
    id: record.id,
    company: record.fields['fldCs2R0MNmmw3AEa'] || 'No company data',  // Company field
    current: record.fields['fldcn9SEoQtopQzbN'] || false,  // Current field
    tier: record.fields['fldInzBganfXA6mQV'] || 'No tier info',  // Tier field
    link: record.fields['fldYOwlHd3HoLILyo'] || '',  // Sponsor link
    logo: record.fields['fldYIC70RW8jdAf16'] 
      ? extractImageInfo(record.fields['fldYIC70RW8jdAf16']) 
      : null,  // Logo field
    location: record.fields['fldBNTlh1dM3g09Ys'] || 'No location info',  // Location field
    description: record.fields['fldKPRImW31cVlDPN'] || 'No description available',  // Description field
  }));
};

  // Helper function to extract image attachment information
  const extractImageInfo = (attachments) => {
    return attachments.map(attachment => ({
      id: attachment.id,
      url: attachment.url,  // Main image URL
      filename: attachment.filename,
      size: attachment.size,
      type: attachment.type,
      width: attachment.width,
      height: attachment.height,
      thumbnails: {
        small: attachment.thumbnails?.small?.url || null,
        large: attachment.thumbnails?.large?.url || null,
      },
    }));
  };

// Function to fetch meetings data
export const getMeetings = async () => {
  const records = await fetchRecords('Meetings');
  return records.map(record => ({
    id: record.id,
    team: record.fields['fldGVIyo3PQ1mOPOc'] || 'No team data',
    building: record.fields['fldkKiDWgkcyhhhcU'] || 'No building data',
    day: record.fields['fldECMit5pbuzxIfo'] || 'No day data',
    room: record.fields['fldUt3pmkfsZp5ir0'] || 'No room data',
    time: record.fields['fldiO6mAD1AR9Fnvg'] || 'No time data',
    priority: record.fields['fldFUGmpzicKtvHtT'] || 0,  // Default priority 0 if not available
  }));
};

export const getPageContent = async (page) => {
  try {
    const response = await fetch(`${baseUrl}/Pages?filterByFormula={Page}="${page}"`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.records.length ? data.records[0].fields : null;
  } catch (error) {
    console.error(`Error fetching page content:`, error);
    return null;
  }
};
