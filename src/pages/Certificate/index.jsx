import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 0,
  },
  retangleLeftTop: {
    position: "absolute",
    height: "400px",
    width: "400px",
    backgroundColor: "#232755",
    zIndex: 2,
    transform: `rotate(50deg)`,
    top: "-250px",
    left: "-250px",
  },

  circleLeftTop: {
    position: "absolute",
    height: "200px",
    width: "200px",
    borderRadius: 9999,
    backgroundColor: "#72cac9",
    left: "108px",
    top: "-140px",
    zIndex: -2,
  },

  circleRightTop: {
    position: "absolute",
    height: "150px",
    width: "150px",
    borderRadius: 9999,
    backgroundColor: "#addafe",
    left: "650px",
    top: "-70px",
    zIndex: -1,
  },

  retangleRightTop: {
    position: "absolute",
    height: "400px",
    width: "400px",
    backgroundColor: "#232755",
    zIndex: 9999,
    transform: `rotate(100deg)`,
    top: "-250px",
    left: "750px",
  },

  retangleRightBottom: {
    position: "absolute",
    height: "400px",
    width: "400px",
    backgroundColor: "#232755",
    zIndex: 2,
    transform: `rotate(30deg)`,
    bottom: "-340px",
    left: "650px",
  },

  circleRightBottom: {
    position: "absolute",
    height: "180px",
    width: "180px",
    borderRadius: 9999,
    backgroundColor: "#72cac9",
    left: "558px",
    bottom: "-70px",
    zIndex: -2,
  },

  retangleLeftBottom: {
    position: "absolute",
    height: "400px",
    width: "400px",
    backgroundColor: "#232755",
    zIndex: 2,
    transform: `rotate(60deg)`,
    bottom: "-340px",
    left: "-150px",
  },

  circleLeftBottom: {
    position: "absolute",
    height: "150px",
    width: "150px",
    borderRadius: 9999,
    backgroundColor: "#addafe",
    left: "138px",
    bottom: "-80px",
    zIndex: -2,
  },

  judul: {
    marginTop: 130,
    fontSize: 43,
    fontStyle: "",
    textAlign: "center",
    color: "#232755",
  },

  text: {
    fontSize: 22,
    textAlign: "center",
    color: "#a4a5ac",
  },

  fillableField: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 43,
    textAlign: "center",
    color: "#232755",
  },

  date: {
    fontSize: 30,
    textAlign: "center",
    color: "#a4a5ac",
  },
});

const Certificate = ({ studentName, courseName }) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date();
  let dd = today.getDate();
  let mm = monthName[today.getMonth()];
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  today = `${dd} ${mm} ${yyyy}`;

  return (
    <Document>
      <Page orientation="landscape" style={styles.body}>
        <View style={styles.retangleLeftTop}></View>
        <View style={styles.circleLeftTop}></View>

        <View style={styles.circleRightTop}></View>
        <View style={styles.retangleRightTop}></View>

        <View style={styles.retangleRightBottom}></View>
        <View style={styles.circleRightBottom}></View>

        <View style={styles.circleLeftBottom}></View>
        <View style={styles.retangleLeftBottom}></View>

        <Text style={styles.judul}>SERTIFIKAT KELULUSAN</Text>
        <Text style={styles.text}>dengan bangga diberikan kepada</Text>
        <Text style={styles.fillableField}>{studentName}</Text>
        <Text style={styles.text}>
          Telah menyelesaikan dengan baik pada kelas
        </Text>
        <Text style={styles.fillableField}>{`" ${courseName} "`}</Text>
        <Text style={styles.date}>{today}</Text>
      </Page>
    </Document>
  );
};

export default Certificate;
