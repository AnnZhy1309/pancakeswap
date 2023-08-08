import CountUp from 'react-countup';
import React from 'react';

export default function TheCountUp(props){
return (
<CountUp end={props.end} duration={props.duration}/>
    )
}