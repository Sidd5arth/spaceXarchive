import Background from "../components/common/Background";
import LoginForm from "../components/auth/LoginForm";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Container } from "@mantine/core";
import React, { useEffect } from "react";

const Backdrop = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 1,
      backdropFilter: "blur(12px)",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    }}
  />
);

const LoginPage: React.FC = () => {
  const { login } = useAuthStore();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/resources");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (email: string, password: string) => {
    const success = login(email, password);
    if (success) navigate("/resources");
    else alert("Invalid credentials");
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Background />
      <Backdrop />
      <Container
        size="lg"
        fluid
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <LoginForm handleSubmit={handleLogin} />
      </Container>
    </div>
  );
};

export default LoginPage;
