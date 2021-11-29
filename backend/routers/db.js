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
            issueDate: "",
            expiryDate: "",
            issuePlace: "",
            number: "",
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
            number: "",
            trafficViolations: "",
          },
        ],
      },
      {
        id: 3,
        title: "Passports",
        count: 1,
        passports: [
          {
            number: "",
            issueDate: "",
            issuePlace: "",
            expiryDate: "",
          },
        ],
      },
      {
        id: 4,
        title: "National Address",
        count: 1,
        nationalAddress: [
          {
            number: "",
            img: "",
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
            issueDate: "",
            expiryDate: "",
            issuePlace: "",
            number: "",
            img: "",
          },
        ],
      },
      {
        id: 2,
        title: "Vehicals",
        count: 1,
        vehicals: [
          {
            number: "",
            trafficViolations: "",
          },
        ],
      },
      {
        id: 3,
        title: "Passports",
        count: 1,
        passports: [
          {
            number: "",
            issueDate: "",
            issuePlace: "",
            expiryDate: "",
          },
        ],
      },
      {
        id: 4,
        title: "National Address",
        count: 1,
        nationalAddress: [
          {
            number: "",
            img: "",
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
            issueDate: "",
            expiryDate: "",
            issuePlace: "",
            number: "",
            img: "",
          },
        ],
      },
      {
        id: 2,
        title: "Vehicals",
        count: 1,
        vehicals: [
          {
            number: "",
            trafficViolations: "",
          },
        ],
      },
      {
        id: 3,
        title: "Passports",
        count: 1,
        passports: [
          {
            number: "",
            issueDate: "",
            issuePlace: "",
            expiryDate: "",
          },
        ],
      },
      {
        id: 4,
        title: "National Address",
        count: 1,
        nationalAddress: [
          {
            number: "",
            img: "",
          },
        ],
      },
    ],
  },
];

module.exports = { user };