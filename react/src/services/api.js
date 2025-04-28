

const uri = "http://localhost:3000/api/";



export const creatProducer = (producerData) => {
    return fetch(uri + "producer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producerData)
    })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        console.log("Producer created:", data);
        return data; 
      })
      .catch(error => {
        console.error("Fetch error:", error);
        throw error;
      });
  };
  

export const updateProducer = (id, updateData) => {
    fetch(`${uri}producer/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        if (data.event) {
            console.log("Producer updated:", data.producer); // מציג את האירוע המעודכן
        } else {
            console.log("Producer update response did not include the event");
        }
    })
    .catch(error => console.error('Error updating producer:', error));
}

export const creatEvent = (eventData) => {
    fetch(uri + "event",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => console.log("Event created:", data))
    .catch(error => console.error("Fetch error:", error));
}

export const deleteEvent = (id) => {
    fetch(uri + "event/" + id ,{
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
    })
    .then(data => console.log("Event deleted:", data))
    .catch(error => console.error("Fetch error:", error));
}

export const updateEvent = (id, updateData) => {
    fetch(`${uri}event/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        if (data.event) {
            console.log("Event updated:", data.event); // מציג את האירוע המעודכן
        } else {
            console.log("Event update response did not include the event");
        }
    })
    .catch(error => console.error('Error updating event:', error));
}


export const readAllEvents = () => {
    return fetch(uri + "event", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    });
}


export const readEvent = async (id) => {
    console.log("Fetching event for ID:", id);
    const url = uri + "event/" + id;
    console.log("Request URL:", url);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        if (!data) throw new Error('No data returned from API');
        
        console.log("Return event with id:", id, data);
        return data;
    } catch (error) {
        console.error("Error fetching event:", error);
        throw error;
    }
};

export const readProducer = async (id) => {
    console.log("Fetching event for id:", id);
    const url = uri + "producer/" + id;
    console.log("Request URL:", url);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        if (!data) throw new Error('No data returned from API');
        
        console.log("Return event with id:", id, data);
        return data;
    } catch (error) {
        console.error("Error fetching event:", error);
        throw error;
    }
};


