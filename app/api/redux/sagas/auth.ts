import { put, takeLatest, call, all } from "redux-saga/effects";
import { loggedinUser, registerUser } from "../slices/auth";
import { authApis } from "../../auth/authApis";
import { LoginUserProps, RegisterUserProps } from "@/app/interfaces/apiInterfaces/apiInterface";
import toast from "react-hot-toast";
import { setBtnValidator } from "../slices/commonSlices";

function* RegisterUser(action: RegisterUserProps): any {
    try {
        yield put(setBtnValidator(true))
        let response = yield authApis.registerUser(action.payload)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
        return response;
    } catch (error) {
    } finally {
        yield put(setBtnValidator(false))
    }
}

function* LoginUser(action: LoginUserProps): any {
    try {
        yield put(setBtnValidator(true))
        let response = yield authApis.loginUser(action.payload)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
        return response;
    } catch (error) {
    } finally {
        yield put(setBtnValidator(false))
    }
}

function* watchLogin() {
    yield takeLatest(loggedinUser.type, LoginUser);
    yield takeLatest(registerUser.type, RegisterUser);
}

export default function* authSagas() {
    yield all([watchLogin()]);
}