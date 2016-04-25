import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
        	<header>
        		<section className="user_data">
        			<div className="avatar">
        				<img src={'https://www.b1g1.com/assets/admin/images/no_image_user.png'} alt="User Name" />
        			</div>
        			<div className="message">
        				<span className="title">Welcome</span>
        				<span className="subtitle">Back</span>
        			</div>
        		</section>
        		<div className="diagonal"></div>
        	</header>
        )
    }
}

export default Header;