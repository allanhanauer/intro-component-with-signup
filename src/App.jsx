import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidFName, setIsValidFName] = useState(true);
  const [isValidLName, setIsValidLName] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
  };

  const handleInputChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(inputEmail));
    console.log(isValid);
  };
  const verifyEmpty = (e) => {
    e.preventDefault();
    console.log(firstName.length);
    if (firstName.length === 0) {
      setIsValidFName(false);
    } else {
      setIsValidFName(true);
    }
    if (lastName.length === 0) {
      setIsValidLName(false);
    } else {
      setIsValidLName(true);
    }
    if (password.length === 0 && password.length < 6) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };
  return (
    <>
      <header></header>
      <main>
        <section className="desc">
          <h1 id="title">Learn to code by watching others</h1>
          <p id="desc-info">
            See how experienced developers solveproblems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className="form-box">
          <section className="promo">
            <p id="text-promo">
              <span>Try it free 7 days</span> then $20/mo.there after
            </p>
          </section>
          <section className="form">
            <form onSubmit={verifyEmpty}>
              <label
                htmlFor="firstName"
                className={isValidFName ? "label-inp" : "label-inp activate"}
                id="fform"
              >
                <input
                  type="text"
                  className="inp"
                  name="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder="First Name"
                />
              </label>
              <label
                htmlFor="lastName"
                className={isValidLName ? "label-inp" : "label-inp activate"}
                id="lform"
              >
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="inp"
                  placeholder="Last Name"
                />
              </label>
              <label
                htmlFor="email"
                className={isValid ? "label-inp" : "label-inp activate"}
                id="eform"
              >
                <input
                  type="text"
                  name="email"
                  className="inp"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </label>
              <label
                htmlFor="password"
                className={isPasswordValid ? "label-inp" : "label-inp activate"}
                id="pform"
              >
                <input
                  type="password"
                  name="password"
                  onChange={handlePasswordChange}
                  value={password}
                  className="inp"
                  placeholder="Password"
                />
              </label>
              <button type="submit" className="submit-button">
                Claim your free trial
              </button>
            </form>
            <p id="terms">
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </section>
        </section>
      </main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noopener noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
