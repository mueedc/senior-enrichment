'use strict'
const chalk = require('chalk')
const db = require('./db')
const { Campus, Student } = require('./db/models')

db.sync({force: true})
    .then(() => {
        console.log(chalk.bgWhite.black('db synced'))
    })
    .then(() => {
        return Campus.bulkCreate([
            { name: 'Blood Drive',
            address: '641 Avenue of Americas New York New York 10011',
            image: '/imgs/bloodgulch_bluebase.jpg',
            managerEmail: 'hoffman@cog.gov' },
            { name: 'Gridlock',
            address: '200 E Randolph St Ste 200 Chicago IL 60601',
            image: '/imgs/beavercreek_redbase.jpg',
            managerEmail: 'prescott@cog.gov' },
            { name: 'Fuel Depot',
            address: '434 Kirkland Ave Kirkland WA 98033',
            image: '/imgs/prison_center.jpg',
            managerEmail: 'myrrah@locust.gov' }
        ])
    })
    .then(() => {
        console.log(chalk.blue('Campuses created'))
    })
    .then(() => {
        return Student.bulkCreate([
            { name: 'Marcus Fenix', address: '123 6th St Melbourne FL 32904', email: 'Jacob@unsc.gov', image: '/imgs/cortana.png', campusId: 1 },
            { name: 'Dominic Santiago', address: '4 Goldfield Rd Honolulu HI 96815', email: 'Holly@unsc.gov', image: '/imgs/man.jpg', campusId: 1 },
            { name: 'Daimon Baird', address: '71 Pilgrim Avenue Chevy Chase MD 20815', email: 'veronica@unsc.gov', image: '/imgs/man.jpg', campusId: 1 },
            { name: 'Augustus Cole', address: '44 Shirley Ave West Chicago IL 60185', email: 'manuel@unsc.gov', image: '/imgs/johnson.png', campusId: 1 },
            { name: 'Anthony Carmine', address: '514 S. Magnolia St Orlando FL 32806', email: 'marcus@unsc.gov', image: '/imgs/man.jpg', campusId: 1 },
            { name: 'Benjamin Carmine', address: '70 Bowman St South Windsor CT 06074', email: 'chips@unsc.gov', image: '/imgs/cortana.png', campusId: 2 },
            { name: 'Minh Young Kim', address: '970 N. Devon Dr Warwick RI 02886', email: 'm@unsc.gov', image: '/imgs/johnson.png', campusId: 2 },
            { name: 'Anya Stroud', address: '8269 Van Dyke Drive Bradenton FL 34203', email: 'carol@unsc.gov', image: '/imgs/cortana.png', campusId: 2 },
            { name: 'Adam Fenix', address: '8269 Van Dyke Drive Bradenton FL 34203', email: 'kojo@unsc.gov', image: '/imgs/man.jpg', campusId: 2 },
            { name: 'General RAAM', address: '38 Race Rd Asheville NC 28803', email: 'michael@unsc.gov', image: '/imgs/cortana.png', campusId: 3 },
            { name: 'High Priest Skorge', address: '7768 Inverness Drive Oxford MS 38655', email: 'avery@unsc.gov', image: '/imgs/man.jpg', campusId: 3 },
            { name: 'Drone', address: '6 Oakwood Street Phillipsburg NJ 08865', email: 'sarah@unsc.gov', image: '/imgs/johnson.png', campusId: 3 },
            { name: 'Kantus', address: '25 North Indian Spring Lane Mooresville NC 28115', email: 'usze@unsc.gov', image: '/imgs/cortana.png', campusId: 3 },
            { name: 'Berserker', address: '50 Bridgeton St. Apopka FL 32703', email: 'wallace@unsc.gov', image: '/imgs/man.jpg', campusId: 3 },
        ])
    })
    .then(() => {
        return console.log(chalk.green('Students created'))
    })
    .then(() => {
        console.log(chalk.bgWhite.black('seed planteed'))
        db.close()
    })
    .catch(console.error)
