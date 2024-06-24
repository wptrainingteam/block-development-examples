<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package BlockDevelopmentExamples\Quiz1835fa
 */

$unique_id = substr( uniqid(), -5 );

wp_interactivity_state(
	'quiz-1835fa-project-store',
	array(
		'quizSelected' => null,
		'openText'     => __( 'Open menu' ),
		'closeText'    => __( 'Close menu' ),
		'quizzes'      => array(
			$unique_id => array(
				'current' => null,
				'correct' => $attributes['answer'],
			),
		),
		'toggleText'   => __( 'Open menu' ),
		'isActive'     => false,
		'inputAnswer'  => null,
	)
);


?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive='{"namespace": "quiz-1835fa-project-store"}'
	data-wp-context='{ "id": "<?php echo esc_attr( $unique_id ); ?>" , "answer": null }'
	data-wp-on--keydown="actions.closeOnEsc"
	data-wp-watch="callbacks.log"
>
	<div>
		<strong>
			<?php echo esc_html__( 'Question', 'block-development-examples' ) . ': '; ?>
		</strong>
		<span><?php echo wp_kses_post( $attributes['question'] ); ?></span>
		<button
			data-wp-on--click="actions.toggle"
			data-wp-bind--aria-expanded="state.isOpen"
			data-wp-text="state.toggleText"
			aria-controls="quiz-<?php echo esc_attr( $unique_id ); ?>"
		>
		</button>
	</div>

	<div
		data-wp-bind--hidden="!state.isOpen"
		id="quiz-<?php echo esc_attr( $unique_id ); ?>"
	>
		<?php if ( 'boolean' === $attributes['typeOfQuiz'] ) : ?>
			<button
				data-wp-context='{ "thisAnswer": true }'
				data-wp-watch="callbacks.focusOnOpen"
				data-wp-on--click="actions.answerBoolean"
				data-wp-class--active="state.isActive"
			>
				<?php esc_html_e( 'Yes', 'block-development-examples' ); ?>
			</button>
			<button
				data-wp-context='{ "thisAnswer": false }'
				data-wp-on--click="actions.answerBoolean"
				data-wp-class--active="state.isActive"
			>
				<?php esc_html_e( 'No', 'block-development-examples' ); ?>
			</button>

		<?php elseif ( 'input' === $attributes['typeOfQuiz'] ) : ?>
			<input
				type="text"
				data-wp-watch="callbacks.focusOnOpen"
				data-wp-on--input="actions.answerInput"
				data-wp-bind--value="state.inputAnswer"
			>

		<?php endif; ?>
	</div>
</div>
