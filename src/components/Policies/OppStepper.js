import React from 'react';    
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Benefits from './Benefits';
import LessBenefits from './LessBenefit';

class SimpleSelect extends React.Component {
    
  state = {
    benefits: {},
    showBenefits: false,
    lessBenefits:{},
    showLessBenefits:false
  }

  toggleBenefitHandler = (e) => {
    
    
  if(e.target.value =='11'||e.target.value =='12'){
    
  this.setState({
    showBenefits: false,
    showLessBenefits: true
    });
  }
  else{
    this.setState({
      showBenefits: true,
      showLessBenefits: false
      });
  }

}
  
  render() {
    let benefits = null;
    let lessBenefits = null;
    if (this.state.showBenefits) {
      benefits = (
      <div>
        <Benefits/>
      </div>
      );
    }if (this.state.showLessBenefits) {
      lessBenefits = (
      <div>
        <LessBenefits/>
      </div>
      );
    }
    return (
      <div className="container">
      
  <FormControl variant="outlined" >
  <InputLabel id="demo-simple-select-outlined-label">Roles</InputLabel>
  <Select
    labelId="demo-simple-select-outlined-label"
    id="demo-simple-select-outlined"
    onChange={this.toggleBenefitHandler}
    label="Roles"
    defaultValue
  >
    <MenuItem value={10}>Physical Therapist</MenuItem>
    <MenuItem value={20}>Occupational Therapist</MenuItem>
    <MenuItem value={30}>Speech Pathologist</MenuItem>
    <MenuItem value={40}>Special Education Teacher</MenuItem>
    <MenuItem value={50}>Early Childhood Education Teacher</MenuItem>
    <MenuItem value={60}>School Psychologist</MenuItem>
    <MenuItem value={11}>Substitute Teacher</MenuItem>
    <MenuItem value={80}>Social Worker</MenuItem>
    <MenuItem value={90}>Teacher Assistant</MenuItem>
    <MenuItem value={12}>One to One Aide</MenuItem>
  </Select>
</FormControl>
        <div>{benefits}</div>
        <div>{lessBenefits}</div>
      </div>
    );
  }
}
export default SimpleSelect;
