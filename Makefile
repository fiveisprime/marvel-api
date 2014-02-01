SRC = index.js $(wildcard lib/*.js)
 
test: $(SRC)
	@node_modules/.bin/jshint $^
