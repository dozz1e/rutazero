<?php get_header(); ?>

<div class="py-20 px-6 md:px-20 lg:px-40">
    <div class="max-w-7xl mx-auto">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('mb-12'); ?>>
                <h1 class="text-4xl font-bold text-primary mb-6"><?php the_title(); ?></h1>
                <div class="prose max-w-none text-slate-700">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; endif; ?>
    </div>
</div>

<?php get_header(); // This was a typo in my thought, should be get_footer() ?>
<?php get_footer(); ?>
