function convertMinsToHrMins(minutes) {
    const hours = Math.floor(minutes / 60);

    if (hours === 0) return minutes + " mins";

    const remainingMinutes = minutes % 60;


    return `${hours} hr ${remainingMinutes} mins`;
}

export default convertMinsToHrMins;