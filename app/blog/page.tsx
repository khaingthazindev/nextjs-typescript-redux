import styles from './blog.module.css';

export default function BlogPage() {
	console.log('styles: ', styles);
	return (<div className={styles.blog}>
		<h3>Blog Page</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perspiciatis possimus quidem quo tempore! Dicta dignissimos, dolorem doloribus earum exercitationem fugit laboriosam, natus nisi pariatur praesentium quasi quod tempora. Accusantium.</p>
	</div>)
}