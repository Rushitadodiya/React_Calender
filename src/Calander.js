import Box from './Box.js';
import Header from './Header.js';
import Daybox from './Daybox.js';
const box = require('./date_tithi.json')
const daybox= require('./day.json')

function Calander()
{
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    return (
        <>
        {/* <div style={{backgroundColor:'green'}}> */}
        <h2 className="month-header" style={{marginLeft:'-600px'}}>MARCH {currentYear} </h2>
        <h2 style={{ marginTop: '-55px', marginLeft: '750px', fontSize: '40px', color: 'maroon', marginBottom: '0px' }}>હરિધામ,સોખડા-39174,જી.વડોદરા.</h2>
        <h3 className="s2080" style={{  marginLeft: '-758px' }}>સંવત 2080 </h3>
        <h3 style={{ marginLeft: '3px',marginTop: '-50px', fontSize:'28px',color:'Brown'}}> શ્રી સ્વામિનારાયણ સંવત 243</h3>
        <h3 style={{ marginLeft: '700px',marginTop: '-65px', fontSize:'28px',color: 'rgb(118, 118, 245)'}}> મહા ફાગણ</h3>
       
        <div style={{
            marginTop: '-65px',
            height:'850px',
            width:'250px',
            backgroundColor:'lightpink', 
            float:'right',
            borderRadius:'50em 50em 0px 0px',color:'brown', fontWeight:'bold'}}>
            <h3 style={{fontSize:'25px'}}>વિશેષ</h3>
            <ol style={{ listStyleType:'none',padding: '0',margin: '0' }}>
            <li style={{marginLeft:'-10px'}}>06-વિજયા એકાદશી,ઉપવાસ</li><br></br>
            <li style={{marginLeft:'-14px'}}>08-મહાશિવરાત્રી(ફરાલ કરવુ)</li><br></br>
            <li style={{marginLeft:'-128px'}}>10-અમાસ</li><br></br>
            <li style={{marginLeft:'-79px'}}>16-હોલાષ્ટક પ્રારંભ</li><br></br>
            <li>20-આમલકી એકાદશી ઉપવાસ</li><br></br>
            <li>20-વેમાર હરિમંદિરનો પાટોત્સવ</li>
            <li style={{marginLeft:'-38px'}}>* (અનુપમ મિશન)</li>
            <li>(પ્રતિષ્ઠા:23-3-2016)</li><br></br>
            <li style={{marginLeft:'-138px'}}>24-પુનમ</li>
            <li style={{marginLeft:'-20px'}}>-હુતાશની,હોલિકાદહન</li>
            <li style={{marginLeft:'-40px'}}>-ભક્તનો વિજયદિન</li>
            <li style={{marginLeft:'39px'}}>-બ્રહ્મસ્વરૂપ શ્રી ભગતમહારાજનો</li>
            <li style={{marginLeft:'-10px'}}>પ્રાગટ્યદિન(સં.1885)</li>
            <li style={{marginLeft:'-1px',fontSize:'13px'}}>(પ્રાગટ્ય:મહુવા,જી.ભાવનગર)</li><br></br>
            <li style={{marginLeft:'-26px'}}>25-હોલાષ્ટક-કમુરતા સમાત્ર</li>
            <li style={{marginLeft:'-10px'}}>-રંગોત્સવ ફુલડોલોત્સવ</li>
            <li style={{marginLeft:'20px'}}>-સંતભગવંત પ.પૂ. જશભાઈ-</li>
            <li>સાહેબનો પ્રાગટ્યદિન</li>
            <li style={{marginLeft:'20px',fontSize:'13px'}}>(બ્રહ્મજ્યોતિ, મોગરી,જી.આનંદ)</li><br></br>
            <li style={{marginLeft:'-44px'}}>27-આત્મીય સંસ્કારધામ</li>
            <li>*ભરૂચ હરિમંદિરનો પાટોત્સવ</li>
            <li>(પ્રતિષ્ઠા:27-3-2016)</li>
            </ol>


        
        </div>
         <div>   
         {
           
                daybox.map(function(day)
                {
                    return  <div style={{width: '950px'}}><Daybox DayE={day.DayE} DayG={day.DayG}/></div>
                })
            }
            {
                box.map(function(date1)
                {
                    return  <div style={{width: '950px'}}><Box date={date1.date} tithi={date1.tithi}  image={date1.image} colorBox={date1.colorBox}/></div>
                })
            }
            </div>
            {/* </div> */}
            
        </>
    )
}
export default Calander;