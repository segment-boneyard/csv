
test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter dot \
		--bail

bench:
	@node bench/large

.PHONY: test bench