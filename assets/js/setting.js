simplyCountdown(".simply-countdown", {
    year: 2024, // required
    month: 2, // required
    day: 1, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: {
        //words displayed into the countdown
        days: { singular: "Hari", plural: "Hari" },
        hours: { singular: "Jam", plural: "Jam" },
        minutes: { singular: "Menit", plural: "Menit" },
        seconds: { singular: "Detik", plural: "Detik" },
    },
});
