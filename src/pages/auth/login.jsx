import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";
import { useNavigate } from "react-router-dom";
import { getProfile, login } from "../../repositories/authentication-repository";

export function PageLogin() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const redirect = new URLSearchParams(window.location.search).get("redirect");
    useEffect(() => {
        if (user) {
            navigate(redirect ?? '/');
        }
    }, [user]);
    const submitHandler = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        login(username, password).then(() => {
            getProfile().then((res) => setUser(res.data.data)).then(() => {
                navigate(redirect ?? "/")
            });
        }).catch((err) => {
            if (err.response && err.response.status < 500) {
                alert("Sai tên tài khoản hoặc mật khẩu")
            }
        })
    }
    return (
        <div style={{
            display: 'grid',
            placeItems: 'center',
            flexGrow: 1,
        }}
        >
            <form onSubmit={submitHandler}>
                <h4 className="mb-3">Vui lòng đăng nhập</h4>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" className="form-control" required aria-required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" required aria-required />
                </div>
                <button type="submit" className="btn btn-primary w-100" onSubmit={submitHandler}>Submit</button>
            </form>
        </div>
    )
}