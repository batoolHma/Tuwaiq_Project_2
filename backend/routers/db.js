const express = require("express");

const user = [
  // 1
  {
    id: 1,
    userName: "Lama",
    passWord: "12345",
    NationalId: "1234567899",

    // dashboard

    dashboard: [
      {
        id: 1,
        title: "Driving Licenses",
        count: 1,
        drivingLicenses: [
          {
            issueDate: "12-2-2019",
            expiryDate: "11-2-2022",
            issuePlace: "Jeddah",
            number: "1",
            img: "https://jamalouki.net/uploads//article/default_article/341b80c5f041c249753c2f034b467528.jpeg",
          },
        ],
      },
      {
        id: 2,
        title: "Vehicals",
        count: 1,
        vehicals: [
          {
            number: "1",
            type: "BMW",
          },
        ],
      },
      {
        id: 3,
        title: "Passports",
        count: 1,
        passports: [
          {
            issueDate: "14-5-2018",
            issuePlace: "Jeddah",
            expiryDate: "12-12-2021",
          },
        ],
      },
      {
        id: 4,
        title: "National Address",
        count: 1,
        nationalAddress: [
          {
            img: "https://i0.wp.com/allaboutksa.com/wp-content/uploads/2016/05/national_address_13.jpg?resize=736%2C717&ssl=1",
          },
        ],
      },
      {
        id: 5,
        title: "Appointments",
        count: 0,
        Appointments: [
          {
            Appointments: "no appointments added",
          },
        ],
      },
      {
        id: 6,
        title: "Traffic Violation",
        count: 33,
        TrafficViolation: [
          {
            payed: "32",
            unpayed: "1",
          },
        ],
      },
      {
        id: 7,
        title: "My Deeds",
        count: 0,
        myDeeds: [
          {
            descrip: "No deeds",
          },
        ],
      },
      {
        id: 8,
        title: "Attorneys",
        count: 0,
        Attorneys: [
          {
            number: 0,
          },
        ],
      },
      {
        id: 9,
        title: "Qiyas Exams Resaults",
        count: 0,
        exams: [
          {
            number: 0,
          },
        ],
      },
      {
        id: 10,
        title: "Internal Travel Record",
        count: 0,
        travels: [
          {
            text: "no data here yet",
          },
        ],
      },
      {
        id: 11,
        title: "Commerical Registration",
        count: 0,
        Commerical: [
          {
            text: "no data here yet",
          },
        ],
      },
      {
        id: 12,
        title: "Vehicals Insurance",
        count: 1,
        Insurance: [
          {
            img: "https://images.template.net/wp-content/uploads/2016/07/25045903/Standard-Certificate-of-Insurance-Template-Free-Download.jpg",
          },
        ],
      },
    ],
  },

  // 2

  {
    id: 2,
    userName: "Noor",
    passWord: "150501",
    NationalId: "1234567899",

    // dashboard
    dashboard: [
      {
        id: 1,
        title: "Driving Licenses",
        count: 1,
        drivingLicenses: [
          {
            issueDate: "12-2-2018",
            expiryDate: "11-9-2022",
            issuePlace: "Abha",
            number: "1",
            img: "https://jamalouki.net/uploads//article/default_article/341b80c5f041c249753c2f034b467528.jpeg",
          },
        ],
      },
      {
        id: 2,
        title: "Vehicals",
        count: 1,
        vehicals: [
          {
            number: "1",
            type: "BMW",
          },
        ],
      },
      {
        id: 3,
        title: "Passports",
        count: 1,
        passports: [
          {
            issueDate: "14-5-2018",
            issuePlace: "Abha",
            expiryDate: "12-12-2021",
          },
        ],
      },
      {
        id: 4,
        title: "National Address",
        count: 1,
        nationalAddress: [
          {
            img: "https://i0.wp.com/allaboutksa.com/wp-content/uploads/2016/05/national_address_13.jpg?resize=736%2C717&ssl=1",
          },
        ],
      },
      {
        id: 5,
        title: "Appointments",
        count: 0,
        Appointments: [
          {
            Appointments: "no appointments added",
          },
        ],
      },
      {
        id: 6,
        title: "Traffic Violation",
        count: 1,
        TrafficViolation: [
          {
            payed: "0",
            unpayed: "1",
          },
        ],
      },
      {
        id: 7,
        title: "My Deeds",
        count: 0,
        myDeeds: [
          {
            descrip: "No deeds",
          },
        ],
      },
      {
        id: 8,
        title: "Attorneys",
        count: 0,
        Attorneys: [
          {
            number: 0,
          },
        ],
      },
      {
        id: 9,
        title: "Qiyas Exams Resaults",
        count: 1,
        exams: [
          {
            number: 1,
          },
        ],
      },
      {
        id: 10,
        title: "Internal Travel Record",
        count: 0,
        travels: [
          {
            text: "no data here yet",
          },
        ],
      },
      {
        id: 11,
        title: "Commerical Registration",
        count: 0,
        Commerical: [
          {
            text: "no data here yet",
          },
        ],
      },
      {
        id: 12,
        title: "Vehicals Insurance",
        count: 1,
        Insurance: [
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeCKRCerfJqNe1YAwSnCOGWlaMdLEk5ChDA&usqp=CAU",
          },
        ],
      },

    ],
  },

  // 3

  {
    id: 3,
    userName: "Sara",
    passWord: "987654321",
    NationalId: "1234567899",

    // dashboard

    dashboard: [
      {
        id: 1,
        title: "Driving Licenses",
        count: 1,
        drivingLicenses: [
          {
            issueDate: "12-2-2018",
            expiryDate: "11-9-2022",
            issuePlace: "Abha",
            number: "1",
            img: "https://jamalouki.net/uploads//article/default_article/341b80c5f041c249753c2f034b467528.jpeg",
          },
        ],
      },
      {
        id: 2,
        title: "Vehicals",
        count: 1,
        vehicals: [
          {
            number: "1",
            type: "BMW",
          },
        ],
      },
      {
        id: 3,
        title: "Passports",
        count: 1,
        passports: [
          {
            issueDate: "14-5-2018",
            issuePlace: "Abha",
            expiryDate: "12-12-2021",
          },
        ],
      },
      {
        id: 4,
        title: "National Address",
        count: 1,
        nationalAddress: [
          {
            img: "https://i0.wp.com/allaboutksa.com/wp-content/uploads/2016/05/national_address_13.jpg?resize=736%2C717&ssl=1",
          },
        ],
      },
      {
        id: 5,
        title: "Appointments",
        count: 0,
        Appointments: [
          {
            Appointments: "no appointments added",
          },
        ],
      },
      {
        id: 6,
        title: "Traffic Violation",
        count: 1,
        TrafficViolation: [
          {
            payed: "0",
            unpayed: "1",
          },
        ],
      },
      {
        id: 7,
        title: "My Deeds",
        count: 0,
        myDeeds: [
          {
            descrip: "No deeds",
          },
        ],
      },
      {
        id: 8,
        title: "Attorneys",
        count: 0,
        Attorneys: [
          {
            number: 0,
          },
        ],
      },
      {
        id: 9,
        title: "Qiyas Exams Resaults",
        count: 1,
        exams: [
          {
            number: 1,
          },
        ],
      },
      {
        id: 10,
        title: "Internal Travel Record",
        count: 0,
        travels: [
          {
            text: "no data here yet",
          },
        ],
      },
      {
        id: 11,
        title: "Commerical Registration",
        count: 0,
        Commerical: [
          {
            text: "no data here yet",
          },
        ],
      },
      {
        id: 12,
        title: "Vehicals Insurance",
        count: 1,
        Insurance: [
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeCKRCerfJqNe1YAwSnCOGWlaMdLEk5ChDA&usqp=CAU",
          },
        ],
      },
    ],
  },
];

module.exports = { user };
