<?php
// phpcs:ignoreFile
wp_interactivity_state(
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
	data-wp-interactive='{"namespace": "quiz-1835fa-project-store"}'
>
	<div>
		<strong><?php echo __( 'Answered' ); ?></strong>: 
		<span data-wp-text="state.answered"></span> / <span data-wp-text="state.totalQuizzes"></span>
	</div>

	<div>
		<strong><?php echo __( 'Correct' ); ?></strong>: 
		<span data-wp-text="state.correct"></span>
		<span data-wp-bind--hidden="!state.allCorrect">
			<?php echo __( 'All correct, congratulations!' ); ?>
		</span>
	</div>

	<div>
		<button
			data-wp-bind--hidden="state.showAnswers"
			data-wp-bind--disabled="!state.allAnswered"
			data-wp-on--click="actions.checkAnswers"
		>
			<?php echo __( 'Check your answers' ); ?>
		</button>
		<button
			data-wp-bind--hidden="!state.showAnswers"
			data-wp-on--click="actions.reset"
		>
			<?php echo __( 'Reset' ); ?>
		</button>
	</div>

	<hr>

	<div>
		<?php echo $content; ?>
	</div>
</div>