import React, {Component} from 'react';
import './previewPostCardComponent.less'
class PreviewPostCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      blog_post: null
    }

    this.extractImageSrcFromArray = this.extractImageSrcFromArray.bind(this);
  }

	extractImageSrcFromArray(id) {
		// This is a method which will extract
		// image source from array of files.
    console.log(this.state.blog_post)
		let obj = this.props.files.find((a) => {

				return a._id === id;
		})
		return obj.url;
	}
	shouldComponentUpdate(nextProps, prevState) {
		const {blog_post} = nextProps;
		// Update state if the values is null;
		// This means that resetInitialData was called.
		// Check if the state is not empty
		// if so set it to null.
		if(blog_post.values === null && prevState.blog_post !== null) {
			this.setState({blog_post: null});
			return true;
		}
		if(blog_post.values) {
			// Lets initialize the state.
			if(prevState.blog_post === null) {
				this.setState({blog_post: blog_post.values});
				return true;
			}
			// Here we update manualy the component
			else {
				for(let key in blog_post.values) {
					// Check key is existent in state.
					// if not, update the state.
					if(prevState.blog_post[key] === undefined) {
						this.setState({blog_post: blog_post.values});
						return true;
					}

					switch (typeof blog_post.values[key]) {
						case "string":
							if(blog_post.values[key] !== prevState.blog_post[key]) {
									this.setState({blog_post: blog_post.values})
									return true;
							}
							break;
						case "object":

							if(blog_post.values[key] === null) {
								console.error('blog_post values error. Check projectForm preview component.')
							}
							// Check if is Array, if so compare values
							// If the values are not equal update the state.
							else if(Array.isArray(blog_post.values[key])) {
								// First lets check if the length of those is not equal
								// if so, update the state.
								if(blog_post.values[key].length !== prevState.blog_post[key].length) {
									 this.setState({blog_post: blog_post.values})
									return true;
								}
								// Now lets compare each value of the array
								// if those are not equal, update the state
								for(let i in blog_post.values[key]) {
									if(prevState.blog_post[key][i] !== blog_post.values[key][i]) {
										this.setState({blog_post: blog_post.values})
										return true;
									}
								}
							}
							// Otherwise is literal object,
							// So lets compare its keys deep.
							else {
								for(let k in blog_post.values[key]) {

									if(prevState.blog_post[key][k] !== blog_post.values[key][k]) {
										this.setState({blog_post: blog_post.values});
										return true;
									}
								}
							}
						break;

						case 'number':
							if(prevState.blog_post[key] !== blog_post.values[key]) {
								this.setState({blog_post: blog_post.values[key]})
								return true;
							}
						break;
						default:
							return true;
					}
				}
			}
		}
		return true;
	}

  render() {
    return (
      <div className="preview__post">
        <div className="preview__post-header">
          <div className="preview__post__header-image">
            {
  						this.state.blog_post && this.state.blog_post.images ?
  						<img src={this.extractImageSrcFromArray(this.state.blog_post.images.card)}/>
  						:
  						<div className="preview__post__header__image-default">

  						</div>
  					}
          </div>
          <div className="preview__post__header-title">
            {
              this.state.blog_post && this.state.blog_post.title ?
              <h3>{this.state.blog_post.title}</h3>
              :
              <div className="preview__post__header__title-default"></div>
            }
          </div>
        </div>
        <div className="preview__post-body">
          <div className="preview__post__body-description">
            {
              this.state.blog_post && this.state.blog_post.description ?
              <p>{this.state.blog_post.description}</p>
              :
              <div className="preview__post__body__description-default"></div>
            }
          </div>
          <div className="preview__post__body-tags">
            {
              this.state.blog_post && this.state.blog_post.tags ?

              this.state.blog_post.tags.map((tag, key) => {
                return (
                  <span key={key}>{tag}</span>
                )
              })
              :
              <div>
                <span className="preview__post__body__tags-default"></span>
                  <span className="preview__post__body__tags-default"></span>
                    <span className="preview__post__body__tags-default"></span>
              </div>
            }
          </div>
        </div>

      </div>
    )
  }
}

export default PreviewPostCardComponent;
