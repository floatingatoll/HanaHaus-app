require "jekyll-assets"

puts "*****************"
puts "ARE WE HERE DUDE?"
puts "*****************"

# bootstrap requires minimum precision of 10, see https://github.com/twbs/bootstrap-sass/issues/409
::Sass::Script::Number.precision = [10, ::Sass::Script::Number.precision].max

require "jekyll-assets/bootstrap"
require "jekyll-assets/font-awesome"

require "jekyll-assets/compass"
