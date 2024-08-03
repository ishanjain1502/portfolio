function getNetworkSpeedType() {
    if ('connection' in navigator && navigator.connection) {
        const connection = navigator.connection;
        const effectiveType = connection.effectiveType;

        console.log(`Network effective connection type: ${effectiveType}`);
        return effectiveType;
    } else {
        console.log("The Network Information API is not supported by this browser.");
        return null;
    }
}

export default getNetworkSpeedType;