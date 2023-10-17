import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "@mui/material";
import { motion } from "framer-motion";

import Logo from "../../Assets/IMG/Logo.svg";
import "./styles.scss";

interface registerFormProps {
  email: string;
  pin: string;
  confirmPin: string;
  bvn: string;
}
interface formElementProps {
  email: boolean;
  pin: boolean;
  confirmPin: boolean;
  bvn: boolean;
}
export default function Register() {
  useEffect(() => {
    document.title = "Create an Account - MoveOn";
  }, []);
  const [formFocusElement, setFormFocusElement] = useState<formElementProps>({
    email: false,
    pin: false,
    confirmPin: false,
    bvn: false,
  });
  const [registerForm, setRegisterForm] = useState<registerFormProps>({
    email: "",
    pin: "",
    confirmPin: "",
    bvn: "",
  });
  const [isPinVisible, setPinVisible] = useState<boolean>(false);
  const activeColor = "#156CF7";
  const inactiveColor = "rgb(204 203 204)";
  return (
    <Container maxWidth="lg">
      <div className="register-container flex-row align-center justify-center width-100">
        <div className="register flex-col align-center justify-between">
          <img className="logo" src={Logo} alt="" />
          <span className="px-30 fw-600 text-blue-dark inter">
            Nice to meet you 👋
          </span>
          <span className="text-center px-16 text-gray-primary">
            This will only take a minte as we set up your account.
          </span>

          <div className="form-row flex-row align-center justify-between">
            <div className="flex-col form-control form-control-full">
              <span className="px-15 text-blue-dark inter label">Email</span>
              <motion.div
                initial={false}
                animate={{
                  borderColor: formFocusElement.email
                    ? activeColor
                    : inactiveColor,
                }}
                className="container flex-row align-center justify-between"
              >
                <motion.span
                  className="icon"
                  initial={false}
                  animate={{
                    color: formFocusElement.email ? activeColor : inactiveColor,
                  }}
                >
                  <i className="far fa-envelope" />
                </motion.span>
                <input
                  type="email"
                  spellCheck={false}
                  placeholder="Enter your email"
                  value={registerForm.email}
                  onChange={(e) => {
                    setRegisterForm({ ...registerForm, email: e.target.value });
                  }}
                  className="input"
                  onFocus={() => {
                    setFormFocusElement({ ...formFocusElement, email: true });
                  }}
                  onBlur={() => {
                    setFormFocusElement({ ...formFocusElement, email: false });
                  }}
                />
                {formFocusElement.email && (
                  <span className="addon">
                    <i className="fal fa-check" />
                  </span>
                )}
              </motion.div>
            </div>
          </div>
          <div className="form-row flex-row align-center justify-between">
            <div className="flex-col form-control form-control-half">
              <span className="px-15 text-blue-dark inter label">Pin code</span>
              <motion.div
                initial={false}
                animate={{
                  borderColor: formFocusElement.pin
                    ? activeColor
                    : inactiveColor,
                }}
                className="container flex-row align-center justify-between"
              >
                <motion.span
                  className="icon"
                  initial={false}
                  animate={{
                    color: formFocusElement.pin ? activeColor : inactiveColor,
                  }}
                >
                  <i className="far fa-envelope" />
                </motion.span>
                <input
                  type={isPinVisible ? "text" : "password"}
                  spellCheck={false}
                  placeholder="Create a PIN"
                  value={registerForm.pin}
                  onChange={(e) => {
                    setRegisterForm({ ...registerForm, pin: e.target.value });
                  }}
                  className="input pin"
                  onFocus={() => {
                    setFormFocusElement({ ...formFocusElement, pin: true });
                  }}
                  onBlur={() => {
                    setFormFocusElement({ ...formFocusElement, pin: false });
                  }}
                />

                <span
                  className="addon pointer"
                  onClick={() => {
                    setPinVisible(!isPinVisible);
                  }}
                >
                  {isPinVisible ? (
                    <i className="far fa-eye" />
                  ) : (
                    <i className="far fa-eye-slash" />
                  )}
                </span>
              </motion.div>
            </div>
            <div className="flex-col form-control form-control-half">
              <span className="px-15 text-blue-dark inter label">
                Confirm Pin
              </span>
              <motion.div
                initial={false}
                animate={{
                  borderColor: formFocusElement.confirmPin
                    ? activeColor
                    : inactiveColor,
                }}
                className="container flex-row align-center justify-between"
              >
                <motion.span
                  className="icon"
                  initial={false}
                  animate={{
                    color: formFocusElement.confirmPin
                      ? activeColor
                      : inactiveColor,
                  }}
                >
                  <i className="far fa-envelope" />
                </motion.span>
                <input
                  type={isPinVisible ? "text" : "password"}
                  spellCheck={false}
                  placeholder="Re-enter pin"
                  value={registerForm.confirmPin}
                  onChange={(e) => {
                    setRegisterForm({
                      ...registerForm,
                      confirmPin: e.target.value,
                    });
                  }}
                  className="input pin"
                  onFocus={() => {
                    setFormFocusElement({
                      ...formFocusElement,
                      confirmPin: true,
                    });
                  }}
                  onBlur={() => {
                    setFormFocusElement({
                      ...formFocusElement,
                      confirmPin: false,
                    });
                  }}
                />

                <span
                  className="addon pointer"
                  onClick={() => {
                    setPinVisible(!isPinVisible);
                  }}
                >
                  {isPinVisible ? (
                    <i className="far fa-eye" />
                  ) : (
                    <i className="far fa-eye-slash" />
                  )}
                </span>
              </motion.div>
            </div>
          </div>
          <div className="form-row flex-row align-center justify-between">
            <div className="flex-col form-control form-control-full">
              <span className="px-15 text-blue-dark inter label">
                Enter your 11-Digit BVN
              </span>
              <motion.div
                initial={false}
                animate={{
                  borderColor: formFocusElement.bvn
                    ? activeColor
                    : inactiveColor,
                }}
                className="container flex-row align-center justify-between"
              >
                <motion.span
                  className="icon"
                  initial={false}
                  animate={{
                    color: formFocusElement.bvn ? activeColor : inactiveColor,
                  }}
                >
                  <i className="far fa-envelope" />
                </motion.span>
                <input
                  type="text"
                  spellCheck={false}
                  placeholder="Enter your Bank Verification Number"
                  value={registerForm.bvn}
                  onChange={(e) => {
                    setRegisterForm({ ...registerForm, bvn: e.target.value });
                  }}
                  className="input"
                  onFocus={() => {
                    setFormFocusElement({ ...formFocusElement, bvn: true });
                  }}
                  onBlur={() => {
                    setFormFocusElement({ ...formFocusElement, bvn: false });
                  }}
                />
                {formFocusElement.bvn && (
                  <span className="addon">
                    <i className="fal fa-check" />
                  </span>
                )}
              </motion.div>
            </div>
          </div>

          <button className="btn-default button submit">Sign Up</button>

          <div className="flex-col width-100 align-center">
            <span className="text-gray-primary px-14">
              Already have an account?
            </span>
            <button className="btn-default button login">Sign In</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
