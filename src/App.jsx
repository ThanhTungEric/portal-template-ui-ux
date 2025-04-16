import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicSimpleTreeView from './components/BasicSimpleTreeView.jsx';
import Input from './pages/Input.jsx';
import Introduction from './pages/Introduction.jsx';
import Login from './pages/Login.jsx';
import LoginForm from './components/LoginForm.jsx';
import Menu from './pages/Menu.jsx';
import Home from './pages/Home.jsx';
import ButtonComponent from './components/ButtonComponent.jsx';
import LoadingButtonsTransition from './components/LoadingButtonsTransition.jsx';
import InputComponentsShowcase from './components/InputComponentsShowcase.jsx';
import FormComponents from './components/FormComponents.jsx';
import IconView from './components/IconView.jsx';
import AlertComponent from './components/AlertComponent.jsx';
import DialogComponent from './components/DialogComponent.jsx';
import ProgressComponent from "./components/ProgressComponent.jsx"

function App() {
  return (
    <Router basename="/ui">
      <div className="app-layout">
        <aside className="sidebar">
          <BasicSimpleTreeView />
        </aside>
        <main className="main-content">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/form" element={<LoginForm />} />
            <Route path="/input/button" element={<ButtonComponent />} />
            <Route path="/input/loading" element={<LoadingButtonsTransition />} />
            <Route path="/input/components" element={<InputComponentsShowcase />} />
            <Route path="/input/form" element={<FormComponents />} />
            <Route path="/input" element={<Input />} />
            <Route path="/data/icon" element={<IconView />} />
            <Route path="/feedback/alert" element={<AlertComponent />} />
            <Route path="/feedback/dialog" element={<DialogComponent />} />
            <Route path="/feedback/progress" element={<ProgressComponent />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<p>Chọn mục bên trái để xem nội dung. v2.</p>} />
          </Routes> 
        </main>
      </div>
    </Router>
  );
}

export default App;
