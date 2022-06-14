import '../sass/layout/_header.scss';
const Header = () => {
	return (
		<div>
			<header className='header'>
				<img
					className='header__logo'
					src='https://delishvegan.com/wp-content/uploads/2020/10/cropped-logo1-1.png'
					alt='delish Vegan Doughnuts'
				/>
				<div className='header__links'>
					<a href='#' className='header__links_item'>
						Pick up
					</a>
					<a href='#' className='header__links_item'>
						Delivery
					</a>
				</div>

				<img
					className='header__hero'
					src='https://delishvegan.com/wp-content/uploads/2020/12/banner-donuts22835.png'
					alt='delish Vegan Doughnuts'
				/>
			</header>
		</div>
	);
};

export default Header;
