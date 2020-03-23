import React , { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import './bootstrap-rtl.css'
import ReactLogo from './react-bg.svg';
import tasks from './sample/tasks.json'
import { spring , AnimatedSwitch } from 'react-router-transition';

// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'
import event from './components/event'
import sendPost from './components/sendPost'
import Header from './components/header'


function LogoReact () {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={ReactLogo} alt="React" className="img-fluid" style={{height : '400px' , width : '400px'}}/>
      <h5>به برنامه من خوش آمدید</h5>
    </div>
    
  )
}

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.5,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};


class App extends Component {

  state = {
    tasks : tasks
  }

  AddTask = (title , old , city , job) => {
    const newTask = {
      title : title ,
      old : old,
      id : this.state.tasks.length+1 ,
      city : city,
      job : job,
      done : true
    }
    this.setState({
      tasks : [...this.state.tasks , newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks : newTasks
    })
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({
      tasks : newTasks
    })
  }

  render () {
    return <div className="App-header">
    <Router style={{direction: 'rtl'}}>
    <Header/>
    <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
      <Route exact path="/" render={() => {
        return (
        <div className="container">
          <LogoReact/>
         </div>
        )}}>
      </Route>
      <Route path="/add" render={() => {
        return (
        <div className="container col-lg-6">
          <h3 className="text-center mb-3 font-weight-bold">لطفا فرم زیر را کامل کنید :</h3>
          <TaskForm AddTask={this.AddTask}/>
          <Tasks tasks={this.state.tasks} deleteTask = {this.deleteTask} checkDone = {this.checkDone}/>
        </div>
        )}}>
      </Route>
      <Route path="/posts" component={Posts} />
      <Route path="/test" component={event} />
      <Route path="/sendPost" component={sendPost} />
      </AnimatedSwitch>
    </Router>
    </div>
  }
}

export default App;
