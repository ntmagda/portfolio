import React, {Component} from 'react';


import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Code_Timeline extends Component{

    render(){
        return (
        <Timeline lineColor={'#ddd'}>
        <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: '#e86971'}}
        >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
            </p>
            <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
            </p>
            <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
            </p>
        </TimelineItem>
        
        </Timeline>
           )
        }
}


export default Code_Timeline;
