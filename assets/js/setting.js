simplyCountdown(".simply-countdown", {
    year: 2023, // required
    month: 12, // required
    day: 31, // required
    hours: 23, // Default is 0 [0-23] integer
    minutes: 59, // Default is 0 [0-59] integer
    seconds: 59, // Default is 0 [0-59] integer
    words: {
        //words displayed into the countdown
        days: { singular: "Hari", plural: "Hari" },
        hours: { singular: "Jam", plural: "Jam" },
        minutes: { singular: "Menit", plural: "Menit" },
        seconds: { singular: "Detik", plural: "Detik" },
    },
});
