import { authConstant } from "../constants";

const initialState = {
  loading: false,
  user: {
    password: "",
    role: "admin",
    userName: "zain",
    otp: null,
    otpExpiry: null,
    googleId: null,
    googleAuthenticated: false,
    _id: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  tokens: {
    access: {
      token: "",
      expires: "",
      uuid: "",
    },
    refresh: {
      token: "",
      expires: "",
      uuid: "",
    },
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.loginUser.request:
      return {
        ...state,
        loading: true,
      };
    case authConstant.loginUser.success:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case authConstant.loginUser.error:
      return {
        ...state,
        loading: false,
      };

    case authConstant.logoutUser:
      return {
        ...initialState,
      };

    case authConstant.changePasswordByOld.request:
      return {
        ...state,
        loading: true,
      };
    case authConstant.changePasswordByOld.success:
      return {
        ...state,
        loading: false,
      };
    case authConstant.changePasswordByOld.error:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
