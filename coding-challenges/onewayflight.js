// const onewayFlight = (tickets) => {
//     const flight = [];
//     let start;
//     const cloneTickets = tickets.slice(0);
//     cloneTickets.forEach((ticket, index) => {
//         if (ticket[0] == null) {
//             start = ticket[1];
//             cloneTickets.splice(index, 1);
//         }
//     });
//     flight.push(start);
//     while (flight.length !== tickets.length - 1) {
//         cloneTickets.forEach((ticket, index) => {
//             if (start === ticket[0] && ticket[1]) {
//                 start = ticket[1];
//                 flight.push(start);
//                 cloneTickets.splice(index, 1);
//             }
//         });
//     }
//     return flight;
// }

const onewayFlight = (tickets) => {
    const hash = {};
    const flight = Array(tickets.length - 1);
    tickets.forEach(ticket => {
        if (ticket[0] == null) {
            flight[0] = ticket[1];
        }
        hash[ticket[0]] = ticket[1];
    });

    for (let i = 1; i < flight.length; i++) {
        flight[i] = hash[flight[i - 1]];
    }

    return flight;
}

const tickets = [
    ['PIT', 'ORD'],
    ['XNA', 'CID'],
    ['SFO', 'BHM'],
    ['FLG', 'XNA'],
    [null, 'LAX'],
    ['LAX', 'SFO'],
    ['CID', 'SLC'],
    ['ORD', null],
    ['SLC', 'PIT'],
    ['BHM', 'FLG'],
];

console.log(onewayFlight(tickets));