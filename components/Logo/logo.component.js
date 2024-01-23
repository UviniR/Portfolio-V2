import React from "react";
import Link from "next/link";
import me from "public/me.png";
import styles from "@styles/logo.module.css";
import Image from "next/image";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<Image src={me} alt="logo" className={styles.logo} width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link href="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;