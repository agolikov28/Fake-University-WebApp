import React from 'react'
import Data from './majors-list.csv'
import Papa from 'papaparse'
import './CSV.css'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faChess, faComputer, faDna, faGavel, faGears, faGlobe, faGraduationCap, faLandmark, faMasksTheater, faNewspaper, faStethoscope, faSuperscript, faWheatAwn } from '@fortawesome/free-solid-svg-icons'

function CSV() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let arrayObj = []
        const fetchData = async () => {
            const response = await fetch(Data)
            const reader = response.body.getReader()
            const result = await reader.read()
            const decoder = new TextDecoder('utf-8')
            const csvData = decoder.decode(result.value)
            const parsedData = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: function(results){
                    arrayObj = results.data
                    renderData(arrayObj);
                }
                }).data;

            setData(parsedData)
        }
        fetchData()
    }, [])


    function renderData(data) { 
        console.clear()
        let mapSchools = new Map(); 
        let schools = new Set();
        let majors = [];
        console.log(data)
        for(let i = 0; i < data.length; i++){
            let currSch = data[i].major_category
            let currMaj = data[i].major
            majors.push(currMaj)
            schools.add(currSch)
        }

        let iconNames = ['fa-wheat-awn','fa-dna',"fa-gears","fa-chess",
            "fa-newspaper","fa-computer","fa-graduation-cap",
            "fa-gavel","fa-superscript","fa-stethoscope",
            "fa-globe","fa-brain","fa-masks-theater","fa-landmark"
        ]

                    for(const value of schools){
                        mapSchools.set(value, [])
                    }

                    for(let k = 0; k < majors.length; k++){
                        let curr = data[k]
                        let currArr = mapSchools.get(curr.major_category)
                        currArr.push(majors[k])
                    }

                    const newMap = new Map()
                    for(let [key,val] of mapSchools){
                        let schoolName = key.split(" ")
                        for (var j = 0; j < schoolName.length; j++) {
                            schoolName[j] = schoolName[j].charAt(0).toUpperCase() + schoolName[j].slice(1);
                        }
                        let major = val
                        for(var k = 0; k < major.length; k++){
                            let majorName = val[k].split(" ")
                            for (j = 0; j < majorName.length; j++) {
                                majorName[j] = majorName[j].charAt(0).toUpperCase() + majorName[j].slice(1);
                            }
                            major[k] = majorName.join(" ")
                        }
                        newMap.set('School Of ' + schoolName.join(" "), major)
                    }

                    console.log(newMap)
                    let count = 0;
                for (const [key,val] of newMap) {
                  let card = document.createElement("div");
                  card.className = 'profile-card'
                    let html = ''
                    html += `<h1>${key}</h1>`
                    //ADD ICON @ COUNT HERE
                   
                    html += `<p>`
                    for (let j = 0; j < val.length; j++) {
                        if (val[j] === '') return;
                        else {
                        html += `· ${val[j]} `
                        }
                  }
                  html += `</p>`
                  card.innerHTML = html;

                  let display = document.getElementById("result-text");

                  if (display) {
                    console.log(card)
                    display.appendChild(card);
                    }
                    count++
                }
              }
  return (
    <>
        <div className="schools">
            <div className="schools-container">
                <div className="schools-wrapper">
                    <h1>Explore Our Schools</h1>
                    <div id="render"></div>
                    <div id="result-display">
                        <h2>Havendale University's Departments span more than 15 disciplines.</h2>
                        <div id="result-text"></div>
                    </div>
               
                </div>
            </div>
        </div>
    </>

  )
}

export default CSV