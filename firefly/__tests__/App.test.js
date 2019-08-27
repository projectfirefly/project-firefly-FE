import React from 'react';
import Accessories from '../src/components/childProfile/Accessories';
import ProfileCard from '../src/components/MyAccount/ProfileCard';
import {shallow} from 'enzyme';

describe('<App/>', () => {

  it('Verifies nothing was added to Accessories', () => {
    const wrapper = shallow(<Accessories/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('Verifies nothing was added to Profile Card', () => {
    const wrapper = <ProfileCard/>
    expect(wrapper).toMatchSnapshot()
  });

  it('View contents of Profile Card', () => {
    const wrapper = shallow(<ProfileCard name={"test"}/>)
    console.log(wrapper.debug())
  });
})

