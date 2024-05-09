import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import BaseLayout from "general/components/BaseLayout";
import BaseTextField from "general/components/Form/BaseTextField";
import { useFormik } from "formik";
import HeaderLandingPage from "general/components/HeaderLandingPage";
import AuthContent from "../components/AuthContent";
import AppButton from "general/components/AppButton";
import Utils from "general/utils/Utils";
import * as Yup from "yup";
import ToastHelper from "general/helpers/ToastHelper";
import AppResource from "general/constants/AppResource";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { thunkSignIn } from "app/authSlice";
import UserHelper from "general/helpers/UserHelper";
import axios from "axios";
import authApi from "api/authApi";
OtpScreen.propTypes = {};

const sTag = "[OtpScreen]";

function OtpScreen(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      otpCode: "",
    },
    onSubmit: async (values) => {
      const params = { ...values };
      let inputPassword = params.password;
      // params.password = Utils.sha256(inputPassword);
      try {
        const res = await authApi.activate(params);
        if (res) {
          const displayName = UserHelper.getDisplayName(res.account);
          ToastHelper.showSuccess(`Activate success`);
          // navigate("/");
        }
      } catch (error) {
        console.log(`${sTag} loggin error: ${error.message}`);
        // ToastHelper.showError('Login không thành công');
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required("You have not entered your email yet")
        .email("Invalid email"),
      password: Yup.string()
        .trim()
        .required("You have not entered your password yet"),

      otpCode: Yup.string()
        .trim()
        .required("You have not entered your OTP yet"),
    }),
  });

  function handleNavigate(url) {
    navigate(url);
  }

  return (
    <div className="OtpScreen min-vh-100 bg-light">
      {/* Header */}
      <HeaderLandingPage
        logo={true}
        searchBar={false}
        menu={true}
        buttonSign={false}
        buttonAddQuestion={false}
      />
      <AuthContent
        leftTitle="Amity"
        // leftDescription="Hơn 15000 câu hỏi đang chờ đợi sự trợ giúp của bạn"
        leftElement={
          <form onSubmit={formik.handleSubmit}>
            <div>
              {/* email input */}
              <div>
                <BaseTextField
                  name="email"
                  placeholder="Enter email..."
                  label="Email"
                  fieldHelper={formik.getFieldHelpers("email")}
                  fieldProps={formik.getFieldProps("email")}
                  fieldMeta={formik.getFieldMeta("email")}
                />
              </div>

              {/* password input */}
              <div>
                <BaseTextField
                  name="password"
                  placeholder="Enter password..."
                  label="Password"
                  type="password"
                  fieldHelper={formik.getFieldHelpers("password")}
                  fieldProps={formik.getFieldProps("password")}
                  fieldMeta={formik.getFieldMeta("password")}
                />
              </div>

              <BaseTextField
                name="otpCode"
                placeholder="Enter OTP code..."
                label="OTP code"
                fieldHelper={formik.getFieldHelpers("otpCode")}
                fieldProps={formik.getFieldProps("otpCode")}
                fieldMeta={formik.getFieldMeta("otpCode")}
              />

              {/* <div
                className="text-center font-weight-bolder cursor-pointer text-center"
                onClick={() => handleNavigate("/request-to-reset-pass")}
                style={{ color: AppResource.colors.featureColor }}
              >
                Forgot password ?
              </div> */}

              {/* sign in button */}
              <AppButton className="btn-orange w-100 mt-5" text="Send" />
              <div className="text-center mt-5">
                Don't have an Amity account yet?{" "}
                <span
                  onClick={() => handleNavigate("/sign-up")}
                  className="cursor-pointer"
                  style={{
                    color: AppResource.colors.featureColor,
                    textDecoration: "underline",
                  }}
                >
                  Sign up
                </span>
              </div>
            </div>
          </form>
        }
      />
    </div>
  );
}

export default OtpScreen;
