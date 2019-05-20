import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ImageBox from '../image-box/image-box';
import CodeBlock from '../code-block/code-block';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'var(--darkGrey)'
    }
});

class LayoutCard extends Component {
    constructor(props) {
        super(props);
		this.state = { 
            keyboard: this.props.keyboard
        };
	}
    
	render() { 
        const classes = useStyles;
        const {title, image, description, keymapLink, author, layouts, parts} = this.state.keyboard;
		return ( 
			<main className="container mx-auto my-4 w-full justify-center">
				<section>
					<ExpansionPanel className="bg-darkGrey">
						<ExpansionPanelSummary className={classes.root}>
							<h1 className="header-quantum h1">
                                {title}
							</h1>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails className="bg-darkGrey flex flex-col">
							<h3 className="header-quantum text-left mb-4">By { author }</h3>
                            <section className="w-full flex flex-row items-end">
                                <ImageBox url={image}></ImageBox>
                            <div className="flex flex-col text-left">
							<p>
                                {description}
							</p>
							<ul>
								<li>
									<p><strong>PCB:</strong> {parts.pcb} </p>
								</li>
								<li>
									<p><strong>Switches:</strong> {parts.switches}</p>
								</li>
								<li>
									<p><strong>Caps:</strong> {parts.caps}, {parts.capProfile}</p>
								</li>
								<li>
									<p><strong>Case:</strong> {parts.case}</p>
								</li>
							</ul>
                            </div>
                            </section>
                            <section className="flex flex-col">
                                {layouts.map((layout, index) => (
                                    <CodeBlock layout={layout} key={index}></CodeBlock>
                                ))}
                            </section>
                        
                            <div className="flex flex-row">
							<button className="btn btn-primary m-2">keymap</button>
							<button className="btn btn-secondary header-quantum m-2">annat</button>
                            </div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</section>
			</main>
		);
	}
}

LayoutCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	layouts: PropTypes.array,
	keymapLink: PropTypes.string,
	parts: {
		pcb: PropTypes.string,
		switches: PropTypes.string,
		capProfile: PropTypes.string,
		caps: PropTypes.string,
		case: PropTypes.string,
	}
};
 
export default LayoutCard;