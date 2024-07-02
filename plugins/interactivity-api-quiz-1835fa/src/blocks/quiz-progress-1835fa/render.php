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
 * @package BlockDevelopmentExamples\QuizProgress1835fa
 */

$state = wp_interactivity_state(
	'quiz-1835fa-project-store',
	array(
		'showAnswers' => false,
		'answered'    => 0,
		'allAnswered' => false,
		'correct'     => '?',
		'allCorrect'  => false,
	)
);

?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive="quiz-1835fa-project-store"
>
	<div>
		<strong><?php echo wp_kses_data( __( 'Answered' ) ); ?></strong>: 
		<span data-wp-text="state.answered"></span>/<?php echo count( $state['quizzes'] ); ?>
	</div>

	<div>
		<strong><?php echo wp_kses_data( __( 'Correct' ) ); ?></strong>: 
		<span data-wp-text="state.correct"></span>
		<span data-wp-bind--hidden="!state.allCorrect">
			<?php echo wp_kses_data( __( 'All correct, congratulations!' ) ); ?>
		</span>
	</div>
	<div>
		<button
			data-wp-bind--hidden="state.showAnswers"
			data-wp-bind--disabled="!state.allAnswered"
			data-wp-on--click="actions.checkAnswers"
		>
			<?php echo wp_kses_data( __( 'Check your answers' ) ); ?>
		</button>
		<button
			data-wp-bind--hidden="!state.showAnswers"
			data-wp-on--click="actions.reset"
		>
			<?php echo wp_kses_data( __( 'Reset' ) ); ?>
		</button>
	</div>

	<hr>

	<div>
		<?php echo wp_kses_data( $content ); ?>
	</div>
</div>