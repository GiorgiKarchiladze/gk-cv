import ProjectCard from "./ProjectCard.jsx";
import dataStructures from "./assets/data-structures.jpg";
import bisectorMethod from "./assets/bisector-method.jpg";
import passwordGenerator from "./assets/password-generator.webp"
import caesarViginereCipher from "./assets/caesars-viginere.webp"
import probabilityCalculator from "./assets/probability.png"
import expenseTracker from "./assets/expense-tracker.jpg"
import luhnAlgorithm from "./assets/luhn-algorithm.jpeg"
import stringConverter from "./assets/string-converter.png"
import timeCalculator from "./assets/time-calculator.webp"
import toDoListApp from "./assets/to-do-list-app.jpg"

// <ProjectCard projectName=""
//              projectImg={}
//              projectDescription=""
//              projectUrl=""/>


function Projects(){



    return(<div className="projects">
        <h1 className="projects-header">Projects</h1>
        <div className="projects-container">
            <ProjectCard projectName="Data Structures"
                         projectImg={dataStructures}
                         projectDescription="In Java"
                         projectUrl="https://github.com/GiorgiKarchiladze/Data-Structures"/>
            <ProjectCard projectName="Bisector method for square root"
                         projectImg={bisectorMethod}
                         projectDescription="The bisection method (also known as the binary search method) for
                         finding the square root is a simple numerical technique based on repeatedly dividing an
                         interval in half to converge on the square root of a given number"
                         projectUrl="https://github.com/GiorgiKarchiladze/Bisector-method-for-square-root"/>
            <ProjectCard projectName="Password Generator"
                         projectImg={passwordGenerator}
                         projectDescription="Simple password generator in Python"
                         projectUrl="https://github.com/GiorgiKarchiladze/Password-generator"/>
            <ProjectCard projectName="Caesars-Viginere Cipher"
                         projectImg={caesarViginereCipher}
                         projectDescription="Implementation of the Caesar and Viginere ciphers"
                         projectUrl="https://github.com/GiorgiKarchiladze/Caesars-Vigenere-Cipher"/>
            <ProjectCard projectName="Probability-Calculator"
                         projectImg={probabilityCalculator}
                         projectDescription="Calculates the probability of a drawn set of balls drawn matching the
                         desired set of balls on a large scale of experiments instead of the mathematical way"
                         projectUrl="https://github.com/GiorgiKarchiladze/Probability-Calculator"/>
            <ProjectCard projectName="Expense Tracker"
                         projectImg={expenseTracker}
                         projectDescription="Simple expense tracker terminal app in Python"
                         projectUrl="https://github.com/GiorgiKarchiladze/Expense-Tracker"/>
            <ProjectCard projectName="Luhn Algorithm"
                         projectImg={luhnAlgorithm}
                         projectDescription="The Luhn Algorithm is widely used for error-checking in various
                         applications, such as verifying credit card numbers"
                         projectUrl="https://github.com/GiorgiKarchiladze/Luhn-Algorithm"/>
            <ProjectCard projectName="String Converter"
                         projectImg={stringConverter}
                         projectDescription="Python app converting string input into pascal, camel or snake case, of
                         your choice"
                         projectUrl="https://github.com/GiorgiKarchiladze/String-converter-to-pascal-camel-and-snake-cases/"/>
            <ProjectCard projectName="Time Calculator"
                         projectImg={timeCalculator}
                         projectDescription="Calculates the elapsed time, should an interval be added to a desired
                         timestamp"
                         projectUrl="https://github.com/GiorgiKarchiladze/Time-calculator-project"/>
            <ProjectCard projectName="To-Do List App"
                         projectImg={toDoListApp}
                         projectDescription="To-Do List App built using react"
                         projectUrl="https://giorgikarchiladze.github.io/to-do-list-app/"/>

        </div>

    </div>)
}

export default Projects