import React, { useEffect, useState } from "react";
import "./App.css";

/* =====================================================
   PRACTICAL 1
===================================================== */

function Practical1() {
  return (
    <div>
      <h1>Welcome to React</h1>

      <h2>My First React Application</h2>

      <p>
        This is a simple React application created using JSX and functional
        components.
      </p>

      <p>React makes it easy to build user interfaces.</p>
    </div>
  );
}

/* =====================================================
   PRACTICAL 2
===================================================== */

function Student(props) {
  return (
    <div>
      <h2>Student Information</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Roll No:</strong> {props.rollNo}
      </p>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>
    </div>
  );
}

function Practical2() {
  return (
    <div>
      <h1>Student Details</h1>

      <Student
        name="Rahul Kumar"
        rollNo="101"
        course="BCA"
        marks="85%"
      />

      <Student
        name="Priya Singh"
        rollNo="102"
        course="BCA"
        marks="92%"
      />

      <Student
        name="Amit Sharma"
        rollNo="103"
        course="BCA"
        marks="78%"
      />
    </div>
  );
}

/* =====================================================
   PRACTICAL 3
===================================================== */

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

function Practical3() {
  return <Counter />;
}

/* =====================================================
   PRACTICAL 4
===================================================== */

function ColorChanger() {
  const [color, setColor] = useState("white");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1>Background Color Changer</h1>

      <p>Select a color to change the background:</p>

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

function Practical4() {
  return <ColorChanger />;
}

/* =====================================================
   PRACTICAL 5
   PDF में दिया हुआ actual code Counter है
===================================================== */

function Practical5() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

/* =====================================================
   PRACTICAL 6
===================================================== */

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {isLoggedIn ? (
          <>
            <div className="success-icon">
              <span>✓</span>
            </div>

            <h1>Welcome Back!</h1>

            <p>
              You are successfully logged in.
            </p>

            <button
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="login-icon">
              <span>👤</span>
            </div>

            <h1>Welcome!</h1>

            <p>
              Please log in to continue.
            </p>

            <button
              onClick={handleLogin}
              className="login-button"
            >
              Login
            </button>
          </>
        )}

      </div>
    </div>
  );
}

function Practical6() {
  return <LoginStatus />;
}

/* =====================================================
   PRACTICAL 7
===================================================== */

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
    },
  ];

  return (
    <div className="product-page">

      <h1>Product List</h1>

      <div className="product-grid">

        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
          >

            <div className="product-icon">
              🛒
            </div>

            <h2>
              {product.name}
            </h2>

            <p>
              {product.category}
            </p>

            <p className="product-price">
              ₹{product.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

function Practical7() {
  return <ProductList />;
}

/* =====================================================
   PRACTICAL 8
===================================================== */

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("+");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    let answer;

    switch (operator) {
      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }

        answer = a / b;
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("+");
  };

  return (
    <div className="calculator">

      <h1>Basic Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">
          Addition (+)
        </option>

        <option value="-">
          Subtraction (-)
        </option>

        <option value="*">
          Multiplication (×)
        </option>

        <option value="/">
          Division (÷)
        </option>
      </select>

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={calculate}>
          Calculate
        </button>

        <button onClick={clearCalculator}>
          Clear
        </button>
      </div>

      {result !== "" && (
        <div className="calculator-result">

          <p>Result</p>

          <p className="result-number">
            {result}
          </p>

        </div>
      )}

    </div>
  );
}

function Practical8() {
  return <Calculator />;
}

/* =====================================================
   PRACTICAL 9
===================================================== */

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (temperature === "") {
      setResult("Please enter a temperature.");
      return;
    }

    const value = Number(temperature);

    if (unit === "C") {
      const fahrenheit = (value * 9) / 5 + 32;

      setResult(
        `${value}°C = ${fahrenheit.toFixed(2)}°F`
      );
    } else {
      const celsius = ((value - 32) * 5) / 9;

      setResult(
        `${value}°F = ${celsius.toFixed(2)}°C`
      );
    }
  };

  const clearConverter = () => {
    setTemperature("");
    setUnit("C");
    setResult("");
  };

  return (
    <div className="calculator">

      <h1>Temperature Converter</h1>

      <label>
        Enter Temperature
      </label>

      <input
        type="number"
        value={temperature}
        onChange={(e) =>
          setTemperature(e.target.value)
        }
        placeholder="Enter temperature"
      />

      <label>
        Select Unit
      </label>

      <select
        value={unit}
        onChange={(e) =>
          setUnit(e.target.value)
        }
      >
        <option value="C">
          Celsius (°C)
        </option>

        <option value="F">
          Fahrenheit (°F)
        </option>
      </select>

      <div>
        <button onClick={convertTemperature}>
          Convert
        </button>

        <button onClick={clearConverter}>
          Clear
        </button>
      </div>

      {result && (
        <div className="calculator-result">
          <p>{result}</p>
        </div>
      )}

    </div>
  );
}

function Practical9() {
  return <TemperatureConverter />;
}

/* =====================================================
   PRACTICAL 10
===================================================== */

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock">

      <h1>Digital Clock</h1>

      <div className="clock-display">
        {time.toLocaleTimeString()}
      </div>

      <p>
        The clock updates every second.
      </p>

    </div>
  );
}

function Practical10() {
  return <DigitalClock />;
}

/* =====================================================
   MASTER PAGE
===================================================== */

function App() {
  const [selectedPractical, setSelectedPractical] =
    useState(0);

  const showPractical = () => {
    switch (selectedPractical) {

      case 1:
        return <Practical1 />;

      case 2:
        return <Practical2 />;

      case 3:
        return <Practical3 />;

      case 4:
        return <Practical4 />;

      case 5:
        return <Practical5 />;

      case 6:
        return <Practical6 />;

      case 7:
        return <Practical7 />;

      case 8:
        return <Practical8 />;

      case 9:
        return <Practical9 />;

      case 10:
        return <Practical10 />;

      default:
        return (
          <h2>
            Select Practical
          </h2>
        );
    }
  };

  return (
    <div className="master-page">

      {/* ONLY BUTTONS */}

      <div className="practical-buttons">

        {[1, 2, 3, 4, 5].map((number) => (
          <button
            key={number}
            onClick={() =>
              setSelectedPractical(number)
            }
          >
            Practical {number}
          </button>
        ))}

        <br />

        {[6, 7, 8, 9, 10].map((number) => (
          <button
            key={number}
            onClick={() =>
              setSelectedPractical(number)
            }
          >
            Practical {number}
          </button>
        ))}

      </div>

      {/* OUTPUT */}

      <div className="output">
        {showPractical()}
      </div>

    </div>
  );
}

export default App;