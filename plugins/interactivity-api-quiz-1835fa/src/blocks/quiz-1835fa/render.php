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

$unique_id = wp_unique_id( 'quiz-' );

wp_interactivity_state(
	'quiz-1835fa-project-store',
	array(
		'openText'    => __( 'Open' ),
		'closeText'   => __( 'Close' ),
		'selected'    => null,
		'isOpen'      => false,
		'toggleText'  => __( 'Open' ),
		'isActive'    => false,
		'inputAnswer' => '',
		'quizzes'     => array(
			$unique_id => array(
				'current' => null,
				'correct' => $attributes['answer'],
			),
		),
	)
);

$context = array(
	'id'     => $unique_id,
	'answer' => null,
);
?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive="quiz-1835fa-project-store"
	data-wp-on--keydown="actions.closeOnEsc"
	<?php echo wp_kses_data( wp_interactivity_data_wp_context( $context ) ); ?>
>
	<div>
		<strong>
			<?php echo esc_html__( 'Question', 'block-development-examples' ) . ': '; ?>
		</strong>
		<span><?php echo wp_kses_post( $attributes['question'] ); ?></span>
		<button
			data-wp-on--click="actions.toggle"
			data-wp-bind--aria-expanded="state.isOpen"
			aria-controls="<?php echo esc_attr( $unique_id ); ?>"
			data-wp-text="state.toggleText"
			data-wp-bind--disabled="state.showAnswers"
		></button>
	</div>

	<div
		data-wp-bind--hidden="!state.isOpen"
		id="<?php echo esc_attr( $unique_id ); ?>"
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