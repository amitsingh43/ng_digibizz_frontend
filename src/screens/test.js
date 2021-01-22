function Test() {
	return (
		<div>
			<div class="row">
				<div class="col-xs-9 col-md-7" style={{ backgroundColor: "red" }}>
					.col-xs-9 .col-md-7
				</div>
				<div class="col-xs-3 col-md-5" style={{ backgroundColor: "lavender" }}>
					.col-xs-3 .col-md-5
				</div>
			</div>
			<div class="row">
				<div
					class="col-xs-6 col-md-10"
					style={{ backgroundColor: "lavenderblush" }}
				>
					.col-xs-6 .col-md-10
				</div>
				<div class="col-xs-6 col-md-2" style={{ backgroundColor: "lightgrey" }}>
					.col-xs-6 .col-md-2
				</div>
			</div>
			<div class="row" style={{ backgroundColor: "lightcyan" }}>
				<div class="col-xs-6">.col-xs-6</div>
				<div class="col-xs-6">.col-xs-6</div>
			</div>
		</div>
	);
}

export default Test;
