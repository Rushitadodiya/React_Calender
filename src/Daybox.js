function Daybox(props){
    return(
        <>
            <div className="box" style={{width: '125px', height: '65px',backgroundColor:'white',borderRadius: '15px',boxShadow: '2px 2px 2px black',opacity: 0.5,float:'left',marginRight: '5px', marginTop: '5px'}}>
                <h4 style={{color:(props.DayE=="SUN")?'red':'Brown',fontSize:'20px', margin:'0'}}>{props.DayE}</h4>
                <h4 style={{color:(props.DayG=="રવિ")?'red':'Brown',fontSize:'20px', margin:'0'}}>{props.DayG}</h4>
            </div>
        </>
    )
}
export default Daybox;
