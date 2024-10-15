// client/src/js/database.js
import { openDB } from "idb";

const initdb = async () =>
    openDB("jate", 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains("jate")) {
                console.log("jate database already exists");
                return;
            }
            db.createObjectStore("jate", {
                keyPath: "id",
                autoIncrement: true,
            });
            console.log("jate database created");
        },
    });

// Method that accepts content and adds it to the database
export const putDb = async (content) => {
    console.log("PUT to the database");

    // Create a connection to the database and specify the version
    const jateDb = await openDB("jate", 1);

    // Create a new transaction
    const tx = jateDb.transaction("jate", "readwrite");

    // Open the object store
    const store = tx.objectStore("jate");

    // Put the content into the store
    const request = store.put({ id: 1, value: content });

    // Get confirmation of the request
    const result = await request;
    console.log("🚀 - data saved to the database", result);
};

// Method that gets content from the database
export const getDb = async () => {
    console.log("GET from the database");

    // Create a connection to the database
    const jateDb = await openDB("jate", 1);

    // Create a new transaction
    const tx = jateDb.transaction("jate", "readonly");

    // Open the object store
    const store = tx.objectStore("jate");

    // Get the data
    const request = store.get(1);

    // Get confirmation of the request
    const result = await request;
    result
        ? console.log("🚀 - data retrieved from the database", result.value)
        : console.log("🚀 - data not found in the database");

    // Return the content
    return result?.value;
};

initdb();
