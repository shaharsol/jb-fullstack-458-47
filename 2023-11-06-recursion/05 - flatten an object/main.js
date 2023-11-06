function flattenAnObject() {
    const client = {
        id: 'fsy89fy89sgy89gsd9',
        names: {
            first: 'Alon',
            middle: '',
            last: 'Cohen'
        },
        phone: {
            home: '035555555',
            mobile: '0545555555'
        },
        address: {
            country: 'Israel',
            city: 'Haifa',
            geo: {
                latitude: 32.15,
                longitude: 34.4
            }
        },
        email: 'israel@gmail.com'
    }

    flatten(client);
}

// flattening this object results in:
/*
{
    id: 'fsy89fy89sgy89gsd9',
    first: 'Alon',
    middle: '',
    last: 'Cohen'
    home: '035555555',
    mobile: '0545555555'
    country: 'Israel',
    city: 'Haifa',
    latitude: 32.15,
    longitude: 34.4
    email: 'israel@gmail.com'
}
*/

// obj   [property]
// client[id]
function flatten(obj) {
    for (const property in obj) {
        if (typeof obj[property] !== 'object') {
            console.log(`${property} => ${obj[property]}`)
        } else {
            flatten(obj[property]);
        }
    }
}


