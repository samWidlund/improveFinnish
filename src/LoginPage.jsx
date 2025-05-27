const LoginPage = () => (
    <div className="login-page">
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
        <form>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
);

export default LoginPage;