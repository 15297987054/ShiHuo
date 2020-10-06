import styled from 'styled-components'

export const TabbarWrapper = styled.div`
    width:100%;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #ccc;
    box-shadow: 0 0 0.32rem 0.02667rem rgba(0,0,0,.51);
    .active{
        color:#ff4338;
    }
    ul{
        height:.9rem;
        display:flex;
        justify-content:center;
        align-items:center;
        li{
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            font-size:.24rem;
            i{
                display:block;
                font-size:24px;
            }
        }
    }
`